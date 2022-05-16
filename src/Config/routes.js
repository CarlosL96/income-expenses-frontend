import LoginPage from "../Pages/Login";
import GeneralPage from "../Pages/General"


const routes = [
  {
    path: "/login",
    pagePath: "/login",
    component: LoginPage,
    isPrivate: false,
  },
  {
    path: "/general",
    pagePath: "/general",
    component: GeneralPage,
    isPrivate: true,
  }, 
  {
    path: "/*",
    pagePath: "/login",
    component: LoginPage,
    isPrivate: true,
  },
];

export default routes;
