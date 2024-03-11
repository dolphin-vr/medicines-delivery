import styled from "styled-components";

export const Main = styled.main`
  width: 1220px;
  height: calc(100vh - 96px);
  margin: 48px auto;
  padding: 16px;
  display: flex;
  gap: 16px;
`;

export const CartWrap = styled.section`
`

export const Order = styled.section`
  margin: 0 auto;
  padding: 16px;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.2);
`;
export const Total = styled.span`
  font-size: 18px;
  font-weight: 500;
`
export const BtnSubmit = styled.button`
  margin-left: auto;
  margin-top: 16px;
  padding: 8px 16px;
  color: white
`