import { DrugsList } from "../../components/DrugsList/DrugsList";
import { ShopsList } from "../../components/ShopsList/ShopsList";
import { Main } from "./CatalogPage.styled";

export const CatalogPage = () => {
	return (
    <Main>
      <h1>CatalogPage</h1>
      <ShopsList />
      <DrugsList />
    </Main>
  );
}