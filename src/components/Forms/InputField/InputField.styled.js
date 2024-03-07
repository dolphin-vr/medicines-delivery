import styled from "styled-components";

export const StyledField = styled.input`
   width: 280px;
   padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(2)};
   border-radius: 6px;
   border: 1px solid ${({ theme }) => theme.colors.blue};
   color: ${({ theme }) => theme.colors.blue};
   background-color: ${({ theme }) => theme.colors.white};
   font-size: 16px;
   line-height: 1.25;
   outline: none;

   &::placeholder {
      color: ${({ theme }) => theme.colors.blue};
   }

   &.invalid {
      color: ${({ theme }) => theme.colors.red};
      border-color: ${({ theme }) => theme.colors.red};
   }

   @media (min-width: 768px) {
      width: 336px;
      height: 44px;
   }

   @media (min-width: 1440px) {
      width: 386px;
   }
`;
