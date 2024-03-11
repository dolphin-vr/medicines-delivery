import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { shopsReducer } from "./shopsSlice";
import { drugReducer } from "./drugsSlice";
import { assortmentReducer } from "./assortmentSlice";
import { cartReducer } from "./cartSlice";
import { userReducer } from "./userSlice";
import { orderReducer } from "./orderSlice";
import { filterReducer } from "./filterSlice";

const cartPersistConfig = {
  key: "medicinesCart",
  storage,
};
const userPersistConfig = {
  key: "medicinesUser",
  storage,
};
const orderPersistConfig = {
  key: "medicinesOrder",
  storage,
};

export const store = configureStore({
  reducer: {
    shops: shopsReducer,
    drugs: drugReducer,
    assortment: assortmentReducer,
    cart: persistReducer(cartPersistConfig, cartReducer),
    user: persistReducer(userPersistConfig, userReducer),
    order: persistReducer(orderPersistConfig, orderReducer),
    filter: filterReducer,
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
