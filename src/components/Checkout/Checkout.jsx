// import { useSelector } from "react-redux";
import { List, Order, Text, Wrapper } from "./Checkout.styled"
// import { selectShops } from "../../redux/shopsSlice";

export const Checkout = ({orders}) => {
		// console.log("orders= ", orders);
  // const shops = useSelector(selectShops);
	// const shopName = id => {
	// 	console.log("shops= ", shops);
  //   const r = shops.find(s => s._id === id);
  //   return r.name;
	// };
	const num = orders.length;
	return (
    <Wrapper>
      <Text>You have {num} orders in {num} shops</Text>
      <Text>Select to confirm purchase</Text>
      <List>
        {orders.map(el => (
          <Order key={el.shop}>{el.shopName}</Order>
        ))}
      </List>
    </Wrapper>
  );
}