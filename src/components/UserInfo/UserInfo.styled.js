import styled from "styled-components";

export const UserForm = styled.form`
  /* width: 400px; */
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

export const StyledField = styled.input`
  width: 280px;
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(2)};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.darkgray};
  color: ${({ theme }) => theme.colors.darkgray};
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  line-height: 1.25;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Label = styled.label`
  /* margin-bottom: 12px; */
`;
