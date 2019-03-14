import router from "./router";
//import store from "./store";
import NProgress from "nprogress"; // Progress 进度条
import "nprogress/nprogress.css"; // Progress 进度条样式
//import { Message } from "element-ui";
import { getToken } from "@/utils/auth"; // 验权

const whiteList = [
  "/login",
  "/register",
  "/selfassessment",
  "/selfassessmententer",
  "/industrymap",
  "/",
  "/test",
  "/aboutus",
  "/articlelist",
  "/article"
]; // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start();
  console.log(getToken());
  if (getToken()) {
    if (to.path === "/login") {
      next("/");
      NProgress.done(); // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next({
        path: "/login",
        query: { redirect: to.fullPath } //把要跳转的地址作为参数传到下一步
      });
      NProgress.done();
    }
  }
});
router.afterEach(() => {
  NProgress.done(); // 结束Progress
});
