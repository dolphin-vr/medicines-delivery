import { useState } from "react"
import { Amount, Card, Img, Imgbox, Info, Name, Price, Shop } from "./CartItem.styled"

export const CartItem = ({ item, handleChange }) => {
	const [amount, setAmount] = useState(item.amount)
	return (
    <Card>
      <Imgbox>
        <Img src={item.url} />
      </Imgbox>
      <Info>
        <Name>{item.drugName}</Name>
        <Shop>{item.shopName}</Shop>
        <Price>Price: {item.price}</Price>
        <Amount
          type="number"
          min={0}
          name="amount"
          value={amount}
          onChange={e => {
            setAmount(e.target.value), handleChange({ _id: item._id, amount: e.target.value, shop: item.shop });
          }}
        />
      </Info>
    </Card>
  );
}