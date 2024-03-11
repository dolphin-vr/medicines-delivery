import styled from "styled-components";

export const Wrapper = styled.section`
  width: 440px;
  margin: 0 auto;
	padding: 16px;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.2);
`;

export const Text = styled.p`
	margin-bottom: 12px;
	font-size: 18px;
	text-align: center;
`

export const List = styled.ul`
	width: 220px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 12px;
`

export const Order = styled.li`
  cursor: pointer;
  padding: 12px 24px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.normalBtn};
  border-radius: ${({ theme }) => theme.radii.lm};
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.2);
  &:hover {
    background-color: ${({ theme }) => theme.colors.activeBtn};
  }
`;