import React from "react";
import style from "./home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Leftsidebar from "../../components/LeftSidebar/Leftsidebar";
import Mainsidebar from "../../components/MainSidebar/Mainsidebar";
import Rightsidebar from "../../components/RightSidebar/Rightsidebar";
import { useSelect } from "@mui/base";
import { useSelector } from "react-redux";
// import style from "../../components/RightSidebar/rightSide.module.css";

const Home = () => {
  const user = useSelector((state) => state.users.value);
  console.log(user);
  return (
    <>
      <Navbar />
      <div className={style.home_contanier}>
        <Leftsidebar />
        <div className={style.home_contanier_mid}>
          <Mainsidebar />
        </div>
        <Rightsidebar />
      </div>
    </>
  );
};

export default Home;
