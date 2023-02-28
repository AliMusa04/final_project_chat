import Leftsidebar from "./components/LeftSidebar/Leftsidebar";
import Mainsidebar from "./components/MainSidebar/Mainsidebar";
import Navbar from "./components/Navbar/Navbar";
import Rightsidebar from "./components/RightSidebar/Rightsidebar";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import style from "./components/RightSidebar/rightSide.module.css";
import Home from "./page/Home/Home";
import Profile from "./page/Profile/Profile";

import { route } from "./routes/route";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Messenger from "./page/Messenger/Messenger";
import notFound from "./page/404found/NotFound";
import NotFound from "./page/404found/NotFound";

// const router = createBrowserRouter(route);
function App() {
  // const user = false;
  const user = useSelector((state) => state.users.value);

  return (
    // <RouterProvider router={router} />
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to={"/"} />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to={"/"} />}
        />
        <Route
          path="/profile/:username"
          element={user ? <Profile /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/messenger"
          element={user ? <Messenger /> : <Navigate to={"/login"} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    // <Routes>
    //   {/* <Switch> */}
    //   <Route exact path="/">
    //     {user ? <Home /> : <Navigate to="/register" />}
    //   </Route>
    //   <Route path="/register">
    //     {!user ? <Register /> : <Navigate to="/" />}
    //   </Route>
    //   <Route path="/login">{!user ? <Login /> : <Navigate to="/" />}</Route>

    //   {user && (
    //     <Route path="/profile/:id">
    //       <Profile />
    //     </Route>
    //   )}
    //   {/* </Switch> */}
    // </Routes>
  );
}

export default App;
