import request from "./request.js";

export async function getBanners() {
  return await request.get("/api/banners");
}