import { CartItem } from "../CartItem/CartItem"
import { Item, List } from "./CartList.styled"

export const CartList = ({ cart, handleChange }) => {
  return (
    <List>
      {cart.map(el => (
        <Item key={el._id}>
          <CartItem item={el} handleChange={handleChange} />
        </Item>
      ))}
    </List>
  );
};