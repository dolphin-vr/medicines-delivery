import { useSelector } from "react-redux";
import { DrugsList } from "../../components/DrugsList/DrugsList";
import { ShopsList } from "../../components/ShopsList/ShopsList";
import { Main } from "./CatalogPage.styled";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchShops } from "../../redux/operations";
import { selectShops } from "../../redux/shopsSlice";
import { selectIsLoading } from "../../redux/shopsSlice";

export const CatalogPage = () => {
	const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShops());
  }, [dispatch]);
	const shops = useSelector(selectShops);

  console.log("shops= ", shops);

	return (
    <Main>
      <h1>CatalogPage</h1>
      {!isLoading && <ShopsList shops={shops} />}
      <DrugsList />
    </Main>
  );
}