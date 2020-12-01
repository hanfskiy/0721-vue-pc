import Mock from "mockjs";

import banners from "./banners.json";
import floors from "./rfloors.json";

Mock.mock("/mock/banners", "get", {
  code: 200,
  "data|4": banners,
});

Mock.mock("/mock/floors", "get", {
  code: 200,
  "data|2-4": floors,
});
