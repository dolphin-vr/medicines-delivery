import { useSelector } from "react-redux"
import { Selector } from "../Selector/Selector"
import { selectShops } from "../../../redux/shopsSlice"
import { selectDrugs } from "../../../redux/drugsSlice"
import { Formik } from "formik"
import { useDispatch } from "react-redux"
import { fetchDrugs, fetchShops, postArticle } from "../../../redux/operations"
import { InputField } from "../InputField/InputField"
import { AddForm } from "./AddAssortment.styled"
import { useEffect } from "react"

export const AddAssortment = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShops());
    dispatch(fetchDrugs());
  }, [dispatch]);
	const shops = useSelector(selectShops);
	const drugs = useSelector(selectDrugs);
  const onAdd = goods => {
      dispatch(postArticle(goods));
  };
        console.log("shops= ", shops);
        console.log("drugs= ", drugs);

	return (
    <Formik
      initialValues={{
        shop: "",
        drug: "",
        price: 0,
        amount: 0,
      }}
      onSubmit={(values, actions) => {
        console.log("values= ", values);
        onAdd(values);
        actions.resetForm();
      }}>
      <AddForm>
        <Selector label={"Shop"} type={"text"} name={"shop"} options={shops} />
        <Selector label={"Drugs"} type={"text"} name={"drug"} options={drugs} />
        <InputField name={"price"} type="number" placeholder="Enter price" />
        <InputField name={"amount"} type="number" placeholder="Enter amount" />
        <button type="submit">Submit</button>
      </AddForm>
    </Formik>
  );
}