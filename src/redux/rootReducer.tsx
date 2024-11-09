// rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import videoModalReducer from "./features/videoModalSlice";
import cartModalReducer from "./features/cartModalSlice";
import searchModalReducer from "./features/searchModalSlice";
import lightboxReducer from "./features/lightboxSlice";
import wishlistModalReducer from "./features/wishlistModalSlice";

const rootReducer = combineReducers({
  videoModal: videoModalReducer,
  cartModal: cartModalReducer,
  searchModal: searchModalReducer,
  lightbox: lightboxReducer,
  wishlistModal: wishlistModalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
