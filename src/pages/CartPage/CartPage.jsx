import { useSelector } from "react-redux";
import { CartWrap, Main } from "./CartPage.styled";
import { editCartItem, selectCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { CartList } from "../../components/CartList/CartList";
import { useState } from "react";
import { Checkout } from "../../components/Checkout/Checkout";
import { UserInfo } from "../../components/UserInfo/UserInfo";

export const CartPage = () => {
  const [userInfo, setUserInfo] = useState({});
  const [showCart, setShowCart] = useState(true);
  const [showCheckout, setShowCheckout] = useState(false);
  const [draftOrders, setDraftOrders] = useState([]);
  
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  // console.log('cart page: cart= ', cart);

  const handleChange = item => {
    dispatch(editCartItem(item));
  };

  const checkoutOrder = cart => {
    const filteredCart = cart.filter(el => el.amount > 0);
    const shopList = [...new Set(filteredCart.map(el => el.shop))];
    shopList.forEach(shop => {
      const goods = filteredCart.filter(x => x.shop === shop);
      const shopName = goods[0].shopName;
      setDraftOrders(prev => [...prev, { shop, shopName, goods }]);
    });
    setShowCart(false);
    setShowCheckout(true);
  };

  const handleInput = e => {
    setUserInfo(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  console.log('user= ', userInfo);
  // const sortedCart = cart.sort((a, b) => a.drugName.localeCompare(b.drugName));
  const sortedCart = [...cart];
  // console.log("s cart= ", sortedCart);

  return (
    <Main>
      {showCart && (
        <>
          <UserInfo handleInput={handleInput} />
          <CartWrap>
            <CartList cart={sortedCart} handleChange={handleChange} />
            <button type="button" onClick={() => checkoutOrder(cart)}>
              checkoutOrder
            </button>
          </CartWrap>
        </>
      )}
      {showCheckout && (
        <>
          <Checkout orders={draftOrders} />
        </>
      )}
    </Main>
  );
};
