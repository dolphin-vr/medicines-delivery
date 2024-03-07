import { BtnAdd, Img, Item, List, Name, Price } from "./DrugsList.styled";

export const DrugsList = ({ goods }) => {
  return (
    <List>
      {goods.map(el => (
        <Item key={el._id}>
          <Img src={el.url} />
          <Name>{el.drug}</Name>
          <Price>{el.price}</Price>
          <BtnAdd type="button">Add to Cart</BtnAdd>
        </Item>
      ))}
    </List>
  );
};
