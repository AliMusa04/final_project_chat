import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../apicall";
import Post from "../Post/Post";
import Share from "../Share/Share";
import style from "./mainSide.module.css";

const Mainsidebar = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const token = useSelector((state) => state.users.value.token);
  const user = useSelector((state) => state.users.value);
  useEffect(() => {
    const getPost = async () => {
      username
        ? await axios
            .get(`http://localhost:8080/api/posts/profile/${username}`)
            .then((res) => setPosts(res.data))
        : await axiosInstance
            .get("/posts/timeline")
            .then((res) => setPosts(res.data));
    };
    getPost();
  }, [username, token]);

  // useEffect(() => {
  //   const getPost = async () => {
  //     await axios
  //       .get("/posts/timeline", {
  //         headers: {
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWZhMTgyZTMzZjQ0MDE3YWMwNjczMSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzY4MzY3NTAsImV4cCI6MTY3NjkyMzE1MH0.YXx52uhAZAN_xYyUmnzyv7SNQGvexvBqO3XEMYwxLqM ",
  //         },
  //       })
  //       .then((res) => setPosts(res.data));
  //   };
  //   getPost();
  // }, [username]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = username
  //       ? await axios.get("/posts/profile/" + username)
  //       : await axios.get("posts/timeline/" + user._id);
  //     setPosts(
  //       res.data.sort((p1, p2) => {
  //         return new Date(p2.createdAt) - new Date(p1.createdAt);
  //       })
  //     );
  //   };
  //   fetchPosts();
  // }, [username, user._id]);

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
