import { useSelector } from "react-redux";
import { Main } from "./CartPage.styled";
import { editCartItem, selectCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { CartList } from "../../components/CartList/CartList";
import { useState } from "react";
import { Checkout } from "../../components/Checkout/Checkout";

export const CartPage = () => {
  const [showCart, setShowCart] = useState(true);
  const [showCheckout, setShowCheckout] = useState(false);
  const [draftOrders, setDraftOrders] = useState([]);
  
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  console.log('cart page: cart= ', cart);

  const handleChange = item => {
    dispatch(editCartItem(item));
  };

  const checkoutOrder = cart => {
    const filteredCart = cart.filter(el => el.amount > 0);
    //   // console.log('filt cart= ', filteredCart);
    const shopList = [...new Set(filteredCart.map(el => el.shop))];
    //   // console.log('uni shop= ', shopList);
    //   // const ordersQuantity = shopList.length;
    //   // const draftOrders = {};
    shopList.forEach(shop => {
      const goods = filteredCart.filter(x => x.shop === shop);
      const shopName = goods[0].shopName;
      setDraftOrders(prev => [...prev, { shop, shopName, goods }]);
    });
    setShowCart(false);
    setShowCheckout(true);
  };

  // const sortedCart = cart.sort((a, b) => a.drugName.localeCompare(b.drugName));

  const sortedCart = [...cart];
  console.log("s cart= ", sortedCart);
  return (
    <Main>
      <h1>Shoping Cart Page</h1>
      {showCart && (
        <>
          <CartList cart={sortedCart} handleChange={handleChange} />
          <button type="button" onClick={() => checkoutOrder(cart)}>
            checkoutOrder
          </button>
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
