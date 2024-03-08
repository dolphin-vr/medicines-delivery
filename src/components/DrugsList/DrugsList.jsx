import { useDispatch } from "react-redux";
import { BtnAdd, Img, Item, List, Name, Price } from "./DrugsList.styled";
import { addCartItem, selectCart } from "../../redux/cartSlice";
import { useSelector } from "react-redux";

export const DrugsList = ({ goods }) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  
  const handleAdd = item => {
    dispatch(addCartItem(item))
    console.log('cart= ', cart)
  }
  return (
    <List>
      {goods.map(el => (
        <Item key={el._id}>
          <Img src={el.url} />
          <Name>{el.drugName}</Name>
          <Price>{el.price}</Price>
          <BtnAdd type="button" onClick={() => handleAdd(el)}>
            Add to Cart
          </BtnAdd>
        </Item>
      ))}
    </List>
  );
};
