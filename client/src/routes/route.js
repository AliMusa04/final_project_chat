import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Profile from "../page/Profile/Profile";
import Register from "../page/Register/Register";

export const route = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];
