import { useSelector } from "react-redux";
import { DrugsList } from "../../components/DrugsList/DrugsList";
import { ShopsList } from "../../components/ShopsList/ShopsList";
import { Main } from "./CatalogPage.styled";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAssortment, fetchDrugs, fetchShops } from "../../redux/operations";
import { selectShops } from "../../redux/shopsSlice";
import { selectisShopsLoading } from "../../redux/shopsSlice";
import { selectDrugs, selectisDrugsLoading } from "../../redux/drugsSlice";
import { selectAssortment, selectisAssortmentLoading } from "../../redux/assortmentSlice";
import { useState } from "react";

const IMG_URL = import.meta.env.VITE_IMG_URL;

export const CatalogPage = () => {
  const [filter, setFilter] = useState("all");
  const isShopsLoading = useSelector(selectisShopsLoading);
  const isDrugsLoading = useSelector(selectisDrugsLoading);
  const isAssortmentLoading = useSelector(selectisAssortmentLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAssortment());
    dispatch(fetchDrugs());
    dispatch(fetchShops());
  }, [dispatch]);
  const shops = useSelector(selectShops);
  const drugs = useSelector(selectDrugs);
  const assortment = useSelector(selectAssortment);

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
    return `${IMG_URL}/${r.img}.jpg`;
  };

  const showLoader = isAssortmentLoading || isDrugsLoading || isShopsLoading;
  const showDrugList = !showLoader && assortment.length > 0 && drugs.length > 0;
  const drugList = showDrugList
    ? assortment
      .filter(el => filter === el.shop || filter === "all")
      .map(el => ({ ...el, drugName: drugName(el.drug), url: imgUrl(el.drug), shopName: shopName(el.shop) }))
    : [];

  return (
    <Main>
      { showLoader && <span>Loading...</span>}
      {!isShopsLoading && <ShopsList shops={shops} onClick={setFilter} filter={filter} />}
      {showDrugList && <DrugsList goods={drugList} />}
    </Main>
  );
};
