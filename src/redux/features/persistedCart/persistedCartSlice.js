import { persistReducer, createTransform } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartSlice from "../cart/cartSlice";

const transform = createTransform(
  // transform state coming from redux on its way to being serialized and persisted.
  (inboundState) => {
    return { ...inboundState };
  },
  // transform state coming from storage, on its way to be rehydrated into redux state
  (outboundState) => {
    return { ...outboundState };
  },
  // define which reducers this transform gets called for.
  { whitelist: ["cartSlice"] }
);

const persistConfig = {
  key: "root",
  storage,
  transforms: [transform],
};

const persistedCartReducer = persistReducer(persistConfig, cartSlice);

export default persistedCartReducer;
