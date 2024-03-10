import styled from "styled-components";

export const Page = styled.div`
  width: 1440px;
  height: calc(100vh - 96px);
  overflow: hidden;
  margin: 48px auto;
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const Main = styled.main`
  height: 100%;
  /* height: calc(100vh - 48px); */
  overflow-y: scroll;
`;
