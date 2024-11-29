import axiosClient from "../../common/networking/Client";
import { Elixir } from "../models/ElixirsModels";

export const getElixirs = async (): Promise<Elixir[]> => {
  const response = await axiosClient.get<Elixir[]>("/elixirs");
  return response.data;
};