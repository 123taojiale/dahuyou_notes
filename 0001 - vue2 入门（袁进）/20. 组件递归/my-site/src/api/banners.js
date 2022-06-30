import request from "./request.js";

export default async () => {
  return await request.get("/api/banner");
}