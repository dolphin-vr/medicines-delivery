import { useDispatch } from "react-redux";
import { handleFilter } from "../../redux/filterSlice";
import { Label, Radio, Radiola, Titlte } from "./Filter.styled"

export const Filter = () => {
  const dispatch = useDispatch();
	return (
    <Radiola onChange={e => dispatch(handleFilter(e.target.value))}>
      <Titlte>Sort catalog by</Titlte>
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
