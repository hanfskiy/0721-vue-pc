import Mock from "mockjs";

import banners from "./banners.json";

Mock.mock("/mock/banners", "get", {
  code: 200,
  "data|4": banners,
});
