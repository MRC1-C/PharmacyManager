import Drink from "../pages/Drink";
import User from "../pages/Admin/User";
import Foods from "../pages/Admin/Foods";
export const PUBLIC_ROUTER = [
  {
    key: "drink",
    path: "/",
    container: Drink,
    exact: true,
  },
];

export const PUBLIC_ROUTER_ADMIN = [
  {
    key: "user",
    path: "/admin/user",
    container: User,
    exact: true,
  },
  {
    key: "foods",
    path: "/admin/foods",
    container: Foods,
    exact: true,
  }
];
