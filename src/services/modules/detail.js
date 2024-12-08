import { request } from "../request";

export async function getHouseInfo(houseId) {
  const response = await request.get(`/detail/infos?houseId=${houseId}`)
  return response.data;
}