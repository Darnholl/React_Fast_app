import React from "react";
import User from "./user";
import PropTypes from "prop-types";

const Users = ({ users, onDelete, onToogle }) => {
    // console.log(props.onToogle);
    return (
        <tbody>
            {users.map((user) => (
                <User
                    key={user._id}
                    user={user}
                    del={onDelete}
                    tog={onToogle}
                />
            ))}
        </tbody>
    );
};

Users.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onToogle: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
};

export default Users;
