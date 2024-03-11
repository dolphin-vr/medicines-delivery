import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
  font-weight: 500;
`;
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
  &:hover {
    background-color: ${({ theme }) => theme.colors.activeBtn};
  }
  &._selected {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.activeBtn};
  }
`;