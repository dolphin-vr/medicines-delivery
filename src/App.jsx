import { Navigate, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import { CartPage } from "./pages/CartPage/CartPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
