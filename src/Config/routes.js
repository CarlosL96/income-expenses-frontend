import LoginPage from "../Pages/Login";
import GeneralPage from "../Pages/General"
import {AiFillHome, AiFillDatabase} from "react-icons/ai"
import {MdAttachMoney, MdDashboard, MdOutlineExitToApp} from "react-icons/md"


const routes = [
  {
    path: "/login",
    pagePath: "/login",
    component: LoginPage,
    isPrivate: false,
  },
  {
    path: "/general",
    label: "Inicio",
    pagePath: "/general",
    icon: AiFillHome,
    component: GeneralPage,
    isPrivate: true,
  }, 
  {
    path: "/prices",
    label: "Precios",
    pagePath: "/prices",
    icon: MdAttachMoney,
    component: GeneralPage,
    isPrivate: true,
  }, 
  {
    path: "/records",
    label: "Registros",
    pagePath: "/records",
    icon: AiFillDatabase,
    component: GeneralPage,
    isPrivate: true,
  }, 
  {
    path: "/dashboard",
    label: "Dashboard",
    pagePath: "/dashboard",
    icon: MdDashboard,
    component: GeneralPage,
    isPrivate: true,
  }, 
  {
    path: "/",
    label: "Salir",
    pagePath: "/",
    icon: MdOutlineExitToApp,
    component: GeneralPage,
    isPrivate: true,
  }, 
  {
    path: "/*",
    pagePath: "/login",
    component: LoginPage,
    isPrivate: false,
  },
];

export default routes;
