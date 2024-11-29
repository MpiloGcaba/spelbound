import { configureStore } from "@reduxjs/toolkit";
import housesReducer from "../home/src/redux/Store/HousesSlice";
import elixirsReducer from "../elixirs/redux/ElixirSlice";

const store = configureStore({
  reducer: {
    houses: housesReducer,
    elixirs: elixirsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;