import { Aside, Item, List } from "./ShopsList.styled";

export const ShopsList = ({shops}) => {
	return (
    <Aside>
      <h2>ShopsList</h2>
      <List>
        {shops.map(el => <Item key={el._id}>{ el.name}</Item>)}
      </List>
    </Aside>
  );
}