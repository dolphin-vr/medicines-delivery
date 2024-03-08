import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { CartWrap, Main, Order } from "./CartPage.styled";
import { editCartItem, selectCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { CartList } from "../../components/CartList/CartList";
import { useState } from "react";
import { Checkout } from "../../components/Checkout/Checkout";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import { editUser, selectUser } from "../../redux/userSlice";
import { addOrder, editOrderItem, selectOrders } from "../../redux/orderSlice";
import { postOrder } from "../../redux/operations";

export const CartPage = () => {
  const user = useSelector(selectUser);
  // console.log('sel user= ', user);
  const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "", address: "" });
  const [showCart, setShowCart] = useState(true);
  const [showCheckout, setShowCheckout] = useState(false);
  // const [draftOrders, setDraftOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(null);
  
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const orders = useSelector(selectOrders);

  // console.log('cart page: cart= ', cart);

  const changeCartItem = item => {
    dispatch(editCartItem(item));
  };
  const changeOrderItem = item => {
    dispatch(editOrderItem(item));
  };


  const checkoutOrder = cart => {
  // console.log("userInfo= ", userInfo, Object.keys(userInfo));
    if (Object.keys(userInfo).length <4) {
      toast.error("Please enter your contact data");
      return;
    }
    if (userInfo.name === "") {
      toast.error("Please enter your name");
      return
    }
    if (userInfo.email === "") {
      toast.error("Please enter your email");
      return;
    }
    if (userInfo.phone === "") {
      toast.error("Please enter your phone");
      return;
    }
    if (userInfo.address === "") {
      toast.error("Please enter your address");
      return;
    }
    dispatch(editUser(userInfo));
    const filteredCart = cart.filter(el => el.amount > 0);
    const shopList = [...new Set(filteredCart.map(el => el.shop))];
    // console.log('uniq sh= ', shopList);
    shopList.forEach(shop => {
      const goods = filteredCart.filter(x => x.shop === shop);
      const shopName = goods[0].shopName;
      dispatch(addOrder({ shop, shopName, goods }));
      // setDraftOrders(prev => [...prev, { shop, shopName, goods }]);
    });
    setShowCart(false);
    setShowCheckout(true);
  };

  const confirmOrder = shop => {
    setCurrentOrder(shop);
    setShowCheckout(false);
  }

  const submitOrder = order => {
    const goods = order.goods.map(el => ({ drug: el.drug, price: el.price, amount: el.amount }));
    dispatch(postOrder({user: userInfo, shop: order.shop, goods }))
  }

  const handleInput = e => {
    setUserInfo(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const sortedCart = cart.sort((a, b) => a.drugName.localeCompare(b.drugName));
  // const sortedCart = [...cart];
  // console.log("s cart= ", sortedCart);

  const showOrder = !!currentOrder;
  const orderData = showOrder ? orders.find(el => el.shop === currentOrder):{};

  return (
    <Main>
      {showCart && (
        <>
          <UserInfo handleInput={handleInput} />
          <CartWrap>
            <CartList cart={sortedCart} handleChange={changeCartItem} />
            <button type="button" onClick={() => checkoutOrder(cart)}>
              checkoutOrder
            </button>
          </CartWrap>
        </>
      )}
      {showCheckout && (
        <>
          <Checkout orders={orders} onClick={confirmOrder} />
        </>
      )}
      {showOrder && (
        <Order>
          <CartList cart={orderData.goods} handleChange={changeOrderItem} />
          <button type="button" onClick={() => submitOrder(orderData)}>
            Submit Order
          </button>
        </Order>
      )}
    </Main>
  );
};
