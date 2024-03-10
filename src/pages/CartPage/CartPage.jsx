import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { postOrder } from "../../redux/operations";
import { editUser, selectUser } from "../../redux/userSlice";
import { editCartItem, emptyCart, selectCart } from "../../redux/cartSlice";
import { addOrder, editOrderItem, selectOrders, selectIsOrderLoading, selectOrderStatus, removeOrder } from "../../redux/orderSlice";
import { CartWrap, Main, Order } from "./CartPage.styled";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import { CartList } from "../../components/CartList/CartList";
import { Checkout } from "../../components/Checkout/Checkout";
import { Loader } from "../../components/Loader/Loader";
import { CartEmpty } from "../../components/CartEmpty/CartEmpty";

export const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const orders = useSelector(selectOrders);
  const user = useSelector(selectUser);
  const isOrderLoading = useSelector(selectIsOrderLoading);
  const statusOrder = useSelector(selectOrderStatus);

  const [userInfo, setUserInfo] = useState(user);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [postedOrder, setPostedOrder] = useState(null);

  const changeCartItem = item => dispatch(editCartItem(item));
  const changeOrderItem = item => dispatch(editOrderItem(item));

  const checkoutOrder = cart => {
    if (Object.keys(userInfo).length < 4) {
      toast.error("Please enter your contact data");
      return;
    }
    if (userInfo.name === "") {
      toast.error("Please enter your name");
      return;
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
    shopList.forEach(shop => {
      const goods = filteredCart.filter(x => x.shop === shop);
      const shopName = goods[0].shopName;
      dispatch(addOrder({ shop, shopName, goods }));
    });
    dispatch(emptyCart());
  };

  const confirmOrder = shop => setCurrentOrder(shop);

  const submitOrder = order => {
    const goods = order.goods.map(el => ({ drug: el.drug, price: el.price, amount: el.amount }));
    dispatch(postOrder({ user: userInfo, shop: order.shop, goods }));
    setPostedOrder(order.shop);
    setCurrentOrder(null);
  };
  useEffect(() => {
    if (statusOrder === 201) {
      dispatch(removeOrder(postedOrder));
      setPostedOrder(null);
    }
  }, [dispatch, orders.length, postedOrder, statusOrder]);

  const handleInput = e => {
    setUserInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sortedCart = [...cart].sort((a, b) => a.drugName.localeCompare(b.drugName));

  const showCart = (cart.length > 0);
  const showCheckout = !showCart && orders.length > 0 && !currentOrder &&!postedOrder;
  const orderData = !!currentOrder ? orders.find(el => el.shop === currentOrder) : {};
  const showOrder = !!currentOrder;
  console.log('orderData= ', orderData)
  console.log('showOrder= ', showOrder)
  const showEmptyMsg = cart.length === 0 && orders.length === 0;
  const showLoader = isOrderLoading;

  return (
    <Main>
      {showCart && (
        <>
          <UserInfo values={userInfo} handleInput={handleInput} />
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
      {showEmptyMsg && <CartEmpty />}
      {showLoader && <Loader />}
    </Main>
  );
};
