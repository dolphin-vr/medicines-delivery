import styled from "styled-components";

export const Card = styled.div`
  width: 560px;
  height: 180px;
  display: flex;
  gap: 12px;
  padding: 4px;
`;

export const Img = styled.img`
	width: 220px;
	flex-shrink: 0;
`

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	flex-grow: 1;
`

export const Name = styled.p`
`

export const Shop = styled.p`
`

export const Price = styled.span`
`

export const Amount = styled.input`
  height: 32px;
  padding: 0 0 0 8px;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    width: 30px;
    height: 32px;
    opacity: 1;
  }
`;