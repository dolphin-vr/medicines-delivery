import { List, Order, Text, Wrapper } from "./Checkout.styled"

export const Checkout = ({orders, onClick}) => {
	const num = orders.length;
	return (
    <Wrapper>
      <Text>
        You have {num} {num === 1 ? "order" : "orders"} in {num} {num === 1 ? "shop" : "shops"}
      </Text>
      <Text>Select to confirm purchase</Text>
      <List>
        {orders.map(el => (
          <Order key={el.shop} onClick={() => onClick(el.shop)}>
            {el.shopName}
          </Order>
        ))}
      </List>
    </Wrapper>
  );
}