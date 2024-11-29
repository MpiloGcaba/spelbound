import { Elixir } from "../../models/ElixirModels";
import { getElixirs } from "../../services/ElixirApi"
import { createAsyncSlice } from "../../../../common/utils/GenericSlice"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchElixirs = createAsyncThunk("elixirs/fetchElixirs", async () => {
  return await getElixirs();
});

//create a slice
const elixirsSlice = createAsyncSlice<Elixirs[], typeof fetchElixirs>(
  "elixirs",
  fetchElixirs,
  []
);

export const selectElixirs = (state: { houses: typeof elixirsSlice["initialState"] }) => state.elixirs.data;
export const selectElixirsStatus = (state: { houses: typeof elixirsSlice["initialState"] }) => state.elixirs.status;
export const selectElixirsError = (state: { houses: typeof elixirsSlice["initialState"] }) => state.elixirs.error;

export default elixirsSlice.reducer;