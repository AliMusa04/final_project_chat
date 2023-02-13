import React, { useState } from "react";
import style from "./rightSide.module.css";
// import InputEmoji from "react-input-emoji";

const Rightsidebar = () => {
  // const [text, setText] = useState("");

  // function handleOnEnter(text) {
  //   console.log("enter", text);
  // }
  return (
    <div className={style.right_side_section}>
      {/* <InputEmoji
        value={text}
        onChange={setText}
        cleanOnEnter
        onEnter={handleOnEnter}
        placeholder="Type a message"
      /> */}
    </div>
  );
};

export default Rightsidebar;
