import { createRouter, createWebHistory } from "vue-router";

// 연결할 각 컴포넌트 import (src/views폴더 아래 컴포넌트들 생성해둠)
import Front from "../pages/Front";
import UserInfo from "../pages/UserInfo";

// 라우터 설계
// const routes = [
//   {
//     path: "/1",
//     component: Front,
//     meta: { transition: "slide-left" },
//   },
//   {
//     path: "/2",
//     component: UserInfo,
//     meta: { transition: "slide-right" },
//   },
// ];

const routes = [
  { path: "/1", component: Front },
  { path: "/2", component: UserInfo },
];

// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 라우터 추출 (main.js에서 import)
export { router };
