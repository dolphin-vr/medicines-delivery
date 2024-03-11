import { useDispatch } from "react-redux";
import { Item, List, } from "./DrugsList.styled";
import { addCartItem, } from "../../redux/cartSlice";
import { DrugCard } from "../DrugCard/DrugCard";

export const DrugsList = ({ goods }) => {
  const dispatch = useDispatch();
  
  const handleAdd = item => {
    dispatch(addCartItem(item))
  }
  return (
    <List>
      {goods.map(el => (
        <Item key={el._id}><DrugCard item={el} handleAdd={handleAdd}/>
        </Item>
      ))}
    </List>
  );
};
