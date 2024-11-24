import {configureStore} from "@reduxjs/toolkit";
import housesReducer, {fetchHouses} from "../store/housesSlice";
import {House} from "../../models/HouseModel";
import AxiosMockAdapter from "axios-mock-adapter";
import axios from "axios";

// Mock Axios for API call
const mockAxios = new AxiosMockAdapter(axios);

describe("housesSlice", () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        houses: housesReducer,
      },
    });
  });

  afterEach(() => {
    mockAxios.reset();
  });

  it("should handle fetchHouses success", async () => {
    const mockHouses: House[] = [
      {
        id: "1",
        name: "Gryffindor",
        founder: "Godric Gryffindor",
        animal: "Lion",
        element: "",
        ghost: "Nearly Headless Nick",
        commonRoom: "Red",
      },
    ];

    mockAxios.onGet("/houses").reply(200, mockHouses);

    await store.dispatch(fetchHouses());

    const state = store.getState().houses;

    expect(state.status).toBe("succeeded");
    expect(state.data).toEqual(mockHouses);
  });

  //failer state
  it("should handle fetchHouses failure", async () => {
    mockAxios.onGet("/houses").reply(500);

    await store.dispatch(fetchHouses());

    const state = store.getState().houses;

    expect(state.status).toBe("failed");
    expect(state.error).toBeDefined();
  });
});
