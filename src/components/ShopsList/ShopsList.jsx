import { Item, List, Title } from "./ShopsList.styled";

export const ShopsList = ({shops, onClick, filter}) => {
	return (
    <>
      <Title>Shops</Title>
      <List>
        <Item key={"all"} onClick={() => onClick("all")} className={filter==="all" ? "_selected" : ""}>
          {"All shops"}
        </Item>
        {shops.map(el => (
          <Item key={el._id} onClick={() => onClick(el._id)} className={filter===el._id ? "_selected" : ""}>
            {el.name}
          </Item>
        ))}
      </List>
    </>
  );
}