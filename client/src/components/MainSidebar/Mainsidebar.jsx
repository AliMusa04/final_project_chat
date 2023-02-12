import React from "react";
import Post from "../Post/Post";
import Share from "../Share/Share";
import style from "./mainSide.module.css";
const Mainsidebar = () => {
  return (
    // <div className={style.main_side_contanier}>
    <div className={style.main_side_section}>
      <div className={style.main_side_wrapper}>
        <Share />
        <Post />
      </div>
    </div>
    // </div>
  );
};

export default Mainsidebar;
