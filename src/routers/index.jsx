import Home from "../views/home";
import About from "../views/about";
import Newbee from "../views/newbee";
import Api from "../views/api";
import Login from "../views/login";
import Topic from "../views/topic";

export const routes = [
  {
    path: "/",
    element: <Home />,
    title: "首页",
  },
  {
    path: "/about",
    element: <About />,
    title: "关于",
  },
  {
    path: "/topic/:id",
    element: <Topic />,
    title: "详情页面",
    hidden: true,
  },
  {
    path: "/newbee",
    element: <Newbee />,
    title: "新手",
  },
  {
    path: "/api",
    element: <Api />,
    title: "api",
  },
  {
    path: "/login",
    element: <Login />,
    title: "登录",
    // hidden: true,
  },
];
