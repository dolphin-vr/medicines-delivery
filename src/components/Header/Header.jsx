import { useSelector } from "react-redux";
import { Cart, CartIcon, Indicator, Logo, MainNav, NavItem, StyledLink, SvgIcon, Wrapper } from "./Header.styled"
import { selectIndicator } from "../../redux/cartSlice";

export const Header = () => {
  const indicator = useSelector(selectIndicator);
	return (
    <Wrapper>
      <Logo to="/">
        <SvgIcon tag={"logo"} />
        OCEAN Pharmacy
      </Logo>
      <MainNav>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/catalog">Catalog</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/cart">Shopping Cart</StyledLink>
        </NavItem>
      </MainNav>
      <Cart to="/cart">
        <CartIcon tag={"icon-drugs5"} />
        <Indicator>{indicator}</Indicator>
      </Cart>
    </Wrapper>
  );
}