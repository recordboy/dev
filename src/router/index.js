import { createRouter, createWebHistory } from "vue-router";

// 연결할 컴포넌트
import Front from "../pages/Front";
import UserInfo from "../pages/UserInfo";

// 라우터 설계


// const routes = [
//   { path: "/1", component: Front },
//   { path: "/2", component: UserInfo },
// ];

const routes = [
  {
    path: "/",
    component: Front,
    meta: { transition: "slide-left" },
  },
  {
    path: "/user-info",
    component: UserInfo,
    meta: { transition: "slide-right" },
  },
];

// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 라우터 추출(main.js에서 import)
export { router };
