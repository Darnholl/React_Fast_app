import React from "react";
import Bookmark from "./bookmark";
import Quantite from "./quantitie";

const User = (props) => {
  // console.log(props);
  return (
    <>
      <tbody>
        {props.state.map((user) => {
          // console.log(user.tog);
          return (
            <>
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  <Quantite key={user._id} {...user} />
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate + " / 5"}</td>
                <td>
                  <Bookmark
                    key={user._id}
                    testToggle={props.tog}
                    forBookmarks={user.bookmark}
                  />
                </td>
                <td>
                  <button
                    className="bnt btn-danger btn-sm m-2"
                    onClick={() => props.del(user._id)}>
                    delete
                  </button>
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
      ;
    </>
  );
};

export default User;
