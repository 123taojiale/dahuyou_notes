import request from "./request.js";

async function getBanners (url) {
  const result = await request.get(url);
  console.log(result);
}

getBanners("/api/banners");