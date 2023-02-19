import React from "react";
import PropTypes from "prop-types";

const Bookmark = (props) => {
    // console.log(props.testToggle());
    // console.log(props.forBookmarks);
    return (
        <button
            className={
                props.forBookmarks === false
                    ? "bi bi-bookmark"
                    : "bi bi-bookmark-heart-fill"
            }
            // onClick={() => props.testToggle(props.forBookmarks)}></button>
            onClick={() => props.testToggle()}
        ></button>
    );
    //   return (
    //     <>
    //       <button className="btn btn-light" onClick={props.testToggle}>
    //         <i className={`bi bi-bookmark${props.forBookmarks ? "-fill" : ""}`}></i>
    //       </button>
    //     </>
    //   );
};

Bookmark.propTypes = {
    forBookmarks: PropTypes.bool.isRequired,
    testToggle: PropTypes.func.isRequired
};

export default Bookmark;
