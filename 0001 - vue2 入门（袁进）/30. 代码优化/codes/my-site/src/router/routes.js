import Home from "@/views/Home";
import About from "@/views/About";
import Blog from "@/views/Blog";
import Detail from "@/views/Blog/Detail";
import Demo from "@/views/Demo";
import Message from "@/views/Message";

// 路由规则
const routes = [
  {name: "Home", path: "/", component: Home},
  {name: "About", path: "/about", component: About},
  {name: "Blog", path: "/article", component: Blog},
  {name: "BlogCategory", path: "/article/cate/:categoryId", component: Blog},
  {name: "Detail", path: "/article/:id", component: Detail},
  {name: "Demo", path: "/projects", component: Demo},
  {name: "Message", path: "/message", component: Message}
]

export default routes;