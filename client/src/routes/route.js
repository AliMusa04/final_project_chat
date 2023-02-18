import { useDispatch } from "react-redux";
import { getUserInfo } from "../apicall/usersApi";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Profile from "../page/Profile/Profile";
import Register from "../page/Register/Register";
import { SetUser } from "../redux/slice/userSlice/userSlice";

export const route = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
];

// const getUserData = async () => {
//   try {
//     const response = await getUserInfo();
//     if (response.success) {
//       dispatch(SetUser(response.data));
//     } else {
//       message.error(response.message);
//     }
//   } catch (error) {
//     navigate("/login");
//     message.error(error.message);
//   }
// };

// useEffect(() => {
//   if (localStorage.getItem("token")) {
//     getUserData();
//   } else {
//     navigate("/login");
//   }
// }, []);
