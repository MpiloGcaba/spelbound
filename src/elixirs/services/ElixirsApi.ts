import axiosClient from '../../../common/networking/Client';
import { House } from '../models/Elixirs';

export const getElixirs = async (): Promise<Elixirs[]> => {
  const response = await axiosClient.get<Elixirs[]>('/elixirs');
  return response.data;
};