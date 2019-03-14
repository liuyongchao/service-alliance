import Vue from "vue";
import Router from "vue-router";

// 一级路由
import Home from "./views/Home.vue";
import MemberCenter from "./views/MemberCenter.vue";
import DynamicNews from "./views/dynamicnews/DynamicNews.vue";
import SelfAssessment from "./views/selfassessment/SelfAssessment.vue";
import SelfAssessmentEnter from "./views/selfassessment/SelfAssessmentEnter.vue";
import SelfEvaluate from "./views/selfassessment/SelfEvaluate.vue";
import IndustryMap from "./views/IndustryMap.vue";
import AboutUS from "./views/AboutUS.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import test from "./views/test.vue";

// 二级路由
import Notice from "./views/dynamicnews/Notice.vue";
import News from "./views/dynamicnews/News.vue";
import Article from "./views/Article.vue";
import ArticleList from "./views/ArticleList.vue";

Vue.use(Router);

const router = new Router({
  //linkActiveClass: "active",
  linkActiveClass: "active",
  routes: [
    {
      path: "/test",
      name: "test",
      component: test
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/membercenter",
      name: "membercenter",
      component: MemberCenter
    },
    {
      path: "/articlelist",
      name: "articlelist",
      component: ArticleList,
      children: [
        {
          path: "/news",
          name: "news",
          component: News
        }
      ]
    },
    {
      path: "/article",
      name: "article",
      component: Article
    },
    {
      path: "/dynamicnews",
      name: "dynamicnews",
      component: DynamicNews,
      children: [
        {
          path: "/notice",
          name: "notice",
          component: Notice
        },
        {
          path: "/news",
          name: "news",
          component: News
        }
      ]
    },
    {
      path: "/selfassessment",
      name: "selfassessment",
      component: SelfAssessment
    },
    {
      path: "/selfassessmententer",
      name: "selfassessmententer",
      component: SelfAssessmentEnter
    },
    {
      path: "/selfevaluate",
      name: "selfevaluate",
      component: SelfEvaluate
    },
    {
      path: "/industrymap",
      name: "industrymap",
      component: IndustryMap
    },
    {
      path: "/aboutus",
      name: "aboutus",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutUS
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    }
  ]
});

export default router;
