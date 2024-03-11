import styled from "styled-components";

export const List = styled.ul`
	height: calc(100% - 96px);
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding: 12px;
`
export const Item = styled.li`
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.2);
`;