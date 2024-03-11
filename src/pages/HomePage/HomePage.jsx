import { Item, List, Main, Title } from "./HomePage.styled"

export const HomePage=() => {
	return (
    <Main>
      <Title>Medicine Delivery Service</Title>
      <List>
        <Item>On the catalog page, select the medicine you need</Item>
        <Item>Add it to your shopping cart</Item>
        <Item>After choosing all the necessary drugs, go to the &quot;Shopping Cart&quot; page</Item>
        <Item>Check the list and quantity of medicines</Item>
        <Item>Click the button &quot;Checkout Order&quot; to create an orders by stores</Item>
        <Item>Select order to confirm purchase</Item>
        <Item>Check the list and quantity of medicines</Item>
        <Item>Click the button &quot;Submit Order&quot; to confirm</Item>
      </List>
      {/* <Loader /> */}
    </Main>
  );
}