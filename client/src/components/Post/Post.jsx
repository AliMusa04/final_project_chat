import React from "react";
import style from "./post.module.css";

const Post = () => {
  return (
    <section>
      <div className={style.post_contanier}>
        <div className={style.post_parent_div}>
          <div className={style.post_top}>post</div>
          <div className={style.post_center}></div>
          <div className={style.post_bottom}></div>
        </div>
      </div>
    </section>
  );
};

export default Post;
