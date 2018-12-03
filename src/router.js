import Vue from "vue";
import Router from "vue-router";

// 一级路由
import Home from "./views/Home.vue";
import AllianceIntroduction from "./views/AllianceIntroduction.vue";
import AllianceDynamics from "./views/alliancedynamics/AllianceDynamics.vue";
import SelfAssessment from "./views/SelfAssessment.vue";
import IndustryMap from "./views/IndustryMap.vue";
import ContactUS from "./views/ContactUS.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";

// 二级路由
import Notice from "./views/alliancedynamics/Notice.vue";
import News from "./views/alliancedynamics/News.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/allianceintroduction",
      name: "allianceintroduction",
      component: AllianceIntroduction
    },
    {
      path: "/alliancedynamics",
      name: "alliancedynamics",
      component: AllianceDynamics,
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
      path: "/industrymap",
      name: "industrymap",
      component: IndustryMap
    },
    {
      path: "/contactus",
      name: "contactus",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ContactUS
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
