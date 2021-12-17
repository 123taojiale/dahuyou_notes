import Home from "@/views/Home";
import About from "@/views/About";
import Blog from "@/views/Blog";
import BlogDetail from "@/views/Blog/components/BlogDetail";
import Demo from "@/views/Demo";
import Message from "@/views/Message";

// 路由规则
const routes = [
  {name: "Home", path: "/", component: Home},
  {name: "About", path: "/about", component: About},
  {name: "Blog", path: "/article", component: Blog},
  {name: "BlogCategory", path: "/article/cate/:categoryId", component: Blog},
  {name: "BlogDetail", path: "/article/:id", component: BlogDetail},
  {name: "Demo", path: "/projects", component: Demo},
  {name: "Message", path: "/message", component: Message}
]

export default routes;