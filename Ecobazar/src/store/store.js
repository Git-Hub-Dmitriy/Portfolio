import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import amountProductReducer from "@store/reducers/amountProductSlice";
import activeModalReducer from "@store/reducers/activeModalSlice";
import statesShopReducer from "@store/reducers/statesShopSlice";
import statesBlogReducer from "@store/reducers/statesBlogSlice";
import shoppingCartReducer from "@store/reducers/shoppingCartSlice";
import languageSlice from "@store/reducers/languagesSlice";
import currencySlice from "@store/reducers/currenciesSlice";
import wishlistSlice from "@store/reducers/wishlistSlice";
import authorizationSlice from "@store/reducers/authorizationSlice";

const config = {
  key: "root",
  storage: storage,
  blacklist: ["activeModal"],
};

const reducers = combineReducers({
  counter: amountProductReducer,
  activeModal: activeModalReducer,
  statesShop: statesShopReducer,
  statesBlog: statesBlogReducer,
  shoppingCart: shoppingCartReducer,
  language: languageSlice,
  currency: currencySlice,
  wishlist: wishlistSlice,
  authorization: authorizationSlice,
});

const persisted = persistReducer(config, reducers);

const store = configureStore({
  reducer: persisted,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
export const persistor = persistStore(store);
