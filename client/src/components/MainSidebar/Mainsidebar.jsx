import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../apicall";
import Post from "../Post/Post";
import Share from "../Share/Share";
import style from "./mainSide.module.css";

const Mainsidebar = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const user = useSelector((state) => state.users.value);

  useEffect(() => {
    const getPost = async () => {
      const res = username
        ? await axios.get(
            `http://localhost:8080/api/posts/profile/${user.username}`
          )
        : await axiosInstance.get(`/posts/timeline`);
      setPosts(
        res.data.sort((d1, d2) => {
          return new Date(d2.createdAt) - new Date(d1.createdAt);
        })
      );
    };
    getPost();
  }, [username, user._id]);

  return (
    // <div className={style.main_side_contanier}>
    <div className={style.main_side_section}>
      <div className={style.main_side_wrapper}>
        <div className={style.post_wrapper_main}>
          <Share />

          {posts &&
            posts.map((post) => {
              return <Post key={post?._id} post={post} />;
            })}
          <p
            style={{ display: posts ? "flex" : "none" }}
            className={style.noPost}>
            No post yet !
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Mainsidebar;
