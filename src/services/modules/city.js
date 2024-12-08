import { request } from "../request";

export async function getCities() {
  const response = await request.get('/city/all');
  return response.data;
}