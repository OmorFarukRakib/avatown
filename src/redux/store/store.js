import { configureStore } from "@reduxjs/toolkit";
import avatarSlice from "../features/avatars/avatarSlice";
import { persistStore } from "redux-persist";
import persistedCartReducer from "../features/persistedCart/persistedCartSlice";
const store = configureStore({
  reducer: {
    avatars: avatarSlice,
    cart: persistedCartReducer,
  },
});

export default store;
export const persistor = persistStore(store);
