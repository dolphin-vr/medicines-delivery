import { Logo, MainNav, NavItem, StyledLink, SvgIcon, Wrapper } from "./Header.styled"

export const Header = () =>{
	return (
    <Wrapper>
      <Logo to="/">
        <SvgIcon tag={"logo"} />
        OCEAN Whale
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
    </Wrapper>
  );
}