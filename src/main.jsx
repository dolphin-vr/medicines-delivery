import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";
// import { Provider } from "react-redux";
// import { persistor, store } from "./redux/store.js";
import App from "./App.jsx";

const theme = {
  colors: {
    background: "#f1f1f1",
    white: "#ffffff",
    black: "#111111",
    lightgray: "#c9c9c9",
    gray: "#a7a7a7",
    mediumgray: "#525252",
    darkgray: "#3f3f3f",
    blue: "#3470FF",
    activeblue: "#0b43c7",
    navy: "#04043d",
    red: "#c00000",
  },
  radii: {
    sm: "4px",
    lm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
  },
  spacing: value => `${value * 4}px`,
  effect: {
    cubic: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter basename="/medicines-delivery">
        <ThemeProvider theme={theme}>
          {/* <Provider store={store}> */}
            <App />
          {/* </Provider> */}
        </ThemeProvider>
      </BrowserRouter>
    {/* </PersistGate> */}
  </React.StrictMode>
);
