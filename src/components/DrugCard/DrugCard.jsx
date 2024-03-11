import { Bold, BtnAdd, Card, Img, Imgbox, Name, Price, Shop } from "./DrugCard.styled";

export const DrugCard = ({ item, handleAdd }) => {
  return (
    <Card>
      <Imgbox>
        <Img src={item.url} />
      </Imgbox>
			<Name>{item.drugName}</Name>
			<Shop>{ item.shopName}</Shop>
      <Price><Bold>{item.price}</Bold> грн.</Price>
      <BtnAdd type="button" onClick={() => handleAdd(item)}>
        Add to Cart
      </BtnAdd>
    </Card>
  );
};