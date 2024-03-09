import { Aside, Item, List } from "./ShopsList.styled";

export const ShopsList = ({shops, onClick, filter}) => {
	return (
    <Aside>
      <h2>ShopsList</h2>
      <List>
        <Item key={"all"} onClick={() => onClick("all")} className={0 === filter ? "_selected" : ""}>
          {"All shops"}
        </Item>
        {shops.map(el => (
          <Item key={el._id} onClick={() => onClick(el._id)} className={el._id === filter ? "_selected" : ""}>
            {el.name}
          </Item>
        ))}
      </List>
    </Aside>
  );
}