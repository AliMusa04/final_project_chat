import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Post from "../Post/Post";
import Share from "../Share/Share";
import style from "./mainSide.module.css";
const Mainsidebar = ({ username }) => {
  const user = useSelector((state) => state.users.value);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPost = async () => {
      username
        ? await axios
            .get(`http://localhost:8080/api/posts/profile/${username}`)
            .then((res) => setPosts(res.data))
        : await axios
            .get(`http://localhost:8080/api/posts/timeline/${user && user._id}`)
            .then((res) => setPosts(res.data));
    };
    getPost();
  }, [username]);

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
              return <Post key={post._id} post={post} />;
            })}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Mainsidebar;
