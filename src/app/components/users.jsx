import React from "react";
import User from "./user";

const Users = (props) => {
  // console.log(props.onToogle);
  return (
    <>
      <User state={props.users} del={props.onDelete} tog={props.onToogle} />
    </>
  );
};

export default Users;
