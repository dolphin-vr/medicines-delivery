import { useSelector } from "react-redux";
import { DrugsList } from "../../components/DrugsList/DrugsList";
import { ShopsList } from "../../components/ShopsList/ShopsList";
import { Main } from "./CatalogPage.styled";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAssortment, fetchDrugs, fetchShops } from "../../redux/operations";
import { selectShops } from "../../redux/shopsSlice";
import { selectIsLoading } from "../../redux/shopsSlice";
import { selectDrugs } from "../../redux/drugsSlice";
import { selectAssortment } from "../../redux/assortmentSlice";
import { useState } from "react";

const IMG_URL = import.meta.env.VITE_IMG_URL;

export const CatalogPage = () => {
  const [filter, setFilter] = useState(0)
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShops());
    dispatch(fetchDrugs());
    dispatch(fetchAssortment());
  }, [dispatch]);
  const shops = useSelector(selectShops);
  const drugs = useSelector(selectDrugs);
  const assortment = useSelector(selectAssortment);

  // const selectShop=id
  // console.log("shops= ", shops); console.log("drugs f= ", drugs);
  // console.log("drugs= ", drugs);
  // console.log("assortment= ", assortment);
  const drugName = id => {
    const r = drugs.find(d => d._id === id);
    return r.name;
  };
  const shopName = id => {
    const r = shops.find(s => s._id === id);
    return r.name;
  };
const imgUrl = id => {
  const r = drugs.find(d => d._id === id);
  return`${IMG_URL}/${r.img}.jpg` ;
};
  const showDrugList = assortment.length > 0 && drugs.length > 0;
  const drugList = showDrugList
    ? assortment.filter(el => filter === el.shop || filter === 0).map(el => ({ ...el, drugName: drugName(el.drug), url: imgUrl(el.drug), shopName: shopName(el.shop) })) //, price: el.price, _id: el._id
    : [];

  // console.log("drugList= ", drugList);

  return (
    <Main>
      {!isLoading && <ShopsList shops={shops} onClick={setFilter} filter={filter} />}
      {showDrugList && <DrugsList goods={drugList} />}
    </Main>
  );
}