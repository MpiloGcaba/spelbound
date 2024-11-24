import axiosClient from '../../../common/networking/Client';
import { House } from '../models/HouseModel';

export const getHouses = async (): Promise<House[]> => {
  const response = await axiosClient.get<House[]>('/houses');
  return response.data;
};
