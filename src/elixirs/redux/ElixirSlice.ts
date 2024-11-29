import { Elixir } from "../models/ElixirsModels";
import { getElixirs } from "../services/ElixirsApi"
import { createAsyncSlice } from "../../common/utils/GenericSlice"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchElixirs = createAsyncThunk("elixirs/fetchElixirs", async () => {
  return await getElixirs();
});

//create a slice
const elixirsSlice = createAsyncSlice<Elixir[], typeof fetchElixirs>(
  "elixirs",
  fetchElixirs,
  []
);

export const selectElixirs = (state: { elixirs: typeof elixirsSlice["initialState"] }) => state.elixirs.data;
export const selectElixirsStatus = (state: { elixirs: typeof elixirsSlice["initialState"] }) => state.elixirs.status;
export const selectElixirsError = (state: { elixirs: typeof elixirsSlice["initialState"] }) => state.elixirs.error;

export default elixirsSlice.reducer;