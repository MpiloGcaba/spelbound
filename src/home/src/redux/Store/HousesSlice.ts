import { House } from "../../models/HouseModel";
import { getHouses } from "../../services/HouseApi"
import { createAsyncSlice } from "../../../../common/utils/GenericSlice"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHouses = createAsyncThunk("houses/fetchHouses", async () => {
  return await getHouses();
});

//create a slice 
const housesSlice = createAsyncSlice<House[], typeof fetchHouses>(
  "houses",
  fetchHouses,
  []
);

export const selectHouses = (state: { houses: typeof housesSlice["initialState"] }) => state.houses.data;
export const selectHousesStatus = (state: { houses: typeof housesSlice["initialState"] }) => state.houses.status;
export const selectHousesError = (state: { houses: typeof housesSlice["initialState"] }) => state.houses.error;

export default housesSlice.reducer;
