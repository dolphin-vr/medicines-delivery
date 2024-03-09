import { Label, StyledField, UserForm } from "./UserInfo.styled";

export const UserInfo = ({values, handleInput}) => {
	return (
    <UserForm>
      <Label>Name</Label>
      <StyledField name={"name"} type="text" placeholder="Enter your name" value={values.name} onChange={e => handleInput(e)} />
      <Label>Email</Label>
      <StyledField name={"email"} type="email" placeholder="Enter your email" onChange={e => handleInput(e)} />
      <Label>Phone</Label>
      <StyledField name={"phone"} type="text" placeholder="Enter your phone" onChange={e => handleInput(e)} />
      <Label>Address</Label>
      <StyledField name={"address"} type="text" placeholder="Enter your address" onChange={e => handleInput(e)} />
    </UserForm>
  );
}