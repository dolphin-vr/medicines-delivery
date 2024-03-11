import { Label, Radio, Radiola } from "./Filter.styled"

export const Filter = () => {
	return (
		<Radiola>
			<Label>Sort catalog by</Label>
      <Label>
        name
        <Radio type="radio" id="radio1" name="filter" value="name" />
      </Label>
      <Label>
        price
        <Radio type="radio" id="radio2" name="filter" value="price" />
      </Label>
      <Label>
        shop
        <Radio type="radio" id="radio3" name="filter" value="shop" />
      </Label>
    </Radiola>
  );
}