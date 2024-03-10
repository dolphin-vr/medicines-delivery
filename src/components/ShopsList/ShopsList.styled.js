import styled from "styled-components";

export const Aside = styled.aside`
  padding: 8px;
  /* background-color: ${({ theme }) => theme.colors.background}; */
`;

export const Title = styled.h2`
  text-align: center;
`
export const List = styled.ul`
  width: 180px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px;
`;

export const Item = styled.li`
  cursor: pointer;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.radii.lm};
  background-color: ${({ theme }) => theme.colors.normalBtn};
  &._selected,
  &:hover {
    background-color: ${({ theme }) => theme.colors.activeBtn};
  }
`;