import LoginPage from "../Pages/Login";


const routes = [
  {
    path: "/login",
    pagePath: "/login",
    component: LoginPage,
    isPrivate: false,
  }, 
  {
    path: "/*",
    pagePath: "/login",
    component: LoginPage,
    isPrivate: true,
  },
];

export default routes;
