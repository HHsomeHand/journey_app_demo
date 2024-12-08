import { request } from "../request";

export async function getHotCities() {
  const response = await request.get('/home/hotSuggests')
  return response.data;
}

export async function getCategory() {
  const response = await request.get('/home/categories')
  return response.data;
}

export async function getHouse(page) {
  const response = await request.get(`/home/houselist?page=${page}`)
  return response.data;
}