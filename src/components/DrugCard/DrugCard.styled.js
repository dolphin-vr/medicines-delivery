import styled from "styled-components";

export const Card = styled.div`
  width: 162px;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  /* background-color: lightgray; */
  border-radius: ${({ theme }) => theme.radii.lm};
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.2);
`;

export const Imgbox = styled.div`
  width: 100%;
  height: 140px;
	margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;
export const Img = styled.img`
	width: auto;
	/* height: 140px; */
`;

export const Info = styled.div`

`
export const Name = styled.p`
	height: 40px;
	margin-bottom: 4px;
	overflow-y: hidden;
	font-size: 11px;
`;
export const Shop = styled.p`
	font-weight: 600;
	margin-bottom: 4px;
`

export const Price = styled.p`
	margin-bottom: 8px;
	font-size: 14px;
	text-align: right;
`;
export const Bold = styled.span`
  font-weight: 600;
`;

export const BtnAdd = styled.button`
	margin-left: auto;
	padding: 4px 12px;
`;
