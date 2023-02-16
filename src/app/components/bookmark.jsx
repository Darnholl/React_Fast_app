import React from "react";

const Bookmark = (props) => {
  // console.log(props.testToggle());
  // console.log(props);
  // const bookmark1 = " bi bi-bookmark";
  // const bookmarkHeart = "bi bi-bookmark-heart-fill";
  // return <button className=" bi bi-bookmark"></button>;
  return (
    <button
      className={
        props.forBookmarks === true
          ? "bi bi-bookmark"
          : "bi bi-bookmark-heart-fill"
      }
      onClick={() => props.testToggle(props.forBookmarks)}></button>
  );
};

export default Bookmark;
