import React from "react";
import User from "./user";

const Users = ({ users, onDelete, onToogle }) => {
  // console.log(props.onToogle);
  return (
    <tbody>
      {users.map((user) => (
        <User key={user._id} user={user} del={onDelete} tog={onToogle} />
      ))}
    </tbody>
  );
};

export default Users;
