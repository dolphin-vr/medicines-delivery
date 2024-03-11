import { Label, StyledField, UserForm } from "./UserInfo.styled";

export const UserInfo = ({values, handleInput}) => {
	return (
    <UserForm>
      <Label>
        Name
        <StyledField name={"name"} type="text" placeholder="Enter your name" value={values.name} onChange={e => handleInput(e)} />
      </Label>
      <Label>
        Email
        <StyledField name={"email"} type="email" placeholder="Enter your email" value={values.email} onChange={e => handleInput(e)} />
      </Label>
      <Label>
        Phone
        <StyledField name={"phone"} type="text" placeholder="Enter your phone" value={values.phone} onChange={e => handleInput(e)} />
      </Label>
      <Label>
        Address
        <StyledField name={"address"} type="text" placeholder="Enter your address" value={values.address} onChange={e => handleInput(e)} />
      </Label>
    </UserForm>
  );
}