import React from "react";
import Bookmark from "./bookmark";
import Quantite from "./quantitie";
import PropTypes from "prop-types";

const User = ({ user, tog, del }) => {
    // console.log(props);
    return (
        <tr>
            <td>{user.name}</td>
            <td>
                <Quantite qualities={user.qualities} />
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate + " / 5"}</td>
            <td>
                <Bookmark
                    // testToggle={() => props.tog(user._id)}
                    testToggle={() => tog(user._id)}
                    forBookmarks={user.bookmark}
                />
            </td>
            <td>
                <button
                    className="bnt btn-danger btn-sm m-2"
                    onClick={() => del(user._id)}
                >
                    delete
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    tog: PropTypes.func.isRequired,
    del: PropTypes.func.isRequired,
    user: PropTypes.array.isRequired
};

export default User;
