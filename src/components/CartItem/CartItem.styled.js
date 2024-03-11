import styled from "styled-components";

export const Card = styled.div`
  width: 580px;
  height: 180px;
  display: flex;
  gap: 12px;
  padding: 4px 16px;
`;

export const Imgbox = styled.div`
  flex-shrink: 0;
  width: 220px;
  height: 160px;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  /* outline: 1px solid orange; */
`;
export const Img = styled.img`
  height: 100%;
`;

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
  border: 1px solid ${({ theme }) => theme.colors.darkgray};
  border-radius: ${({ theme }) => theme.radii.sm};
  outline: none;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    width: 30px;
    height: 32px;
    opacity: 1;
  }
`;