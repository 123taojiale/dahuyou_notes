import { getAsyncPageComponent } from "../utils/getAsyncComponent"

export default [
  {
    name: "Home",
    path: "/",
    component: getAsyncPageComponent('../views/Home.vue'),
  },
  {
    name: "About",
    path: "/about",
    component: getAsyncPageComponent('../views/About.vue'),
  },
]

// 同步
// import Home from "../views/Home.vue";
// import About from "../views/About.vue";

// 异步
// import { getAsyncPageComponent } from "../utils/getAsyncComponent"
// const Home = getAsyncPageComponent('../views/Home.vue');
// const About = getAsyncPageComponent('../views/About.vue');

// export default [
//   {
//     name: "Home",
//     path: "/",
//     component: Home,
//   },
//   {
//     name: "About",
//     path: "/about",
//     component: About,
//   },
// ]