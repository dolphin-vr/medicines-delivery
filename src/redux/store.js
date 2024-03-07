import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  // persistReducer,
  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
} from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { shopsReducer } from "./shopsSlice";
import { drugReducer } from "./drugsSlice";
import { assortmentReducer } from "./assortmentSlice";

// const medicinesPersistConfig = {
//   key: "medicines",
//   storage,
// };

export const store = configureStore({
  reducer: {
    shops: shopsReducer,
    drugs: drugReducer,
    assortment: assortmentReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: import.meta.env.VITE_NODE_ENV === "development",
});

export const persistor = persistStore(store);
