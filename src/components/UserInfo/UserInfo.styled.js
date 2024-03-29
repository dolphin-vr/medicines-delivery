import styled from "styled-components";

export const UserForm = styled.form`
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
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
  line-height: 1.25;
`;
