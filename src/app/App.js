import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";
import Pagination from "./components/pagination";
// searchStatus.jsx

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());
  // console.log(users.length);
  const count = users.length;
  const pageSize = 4;
  const handlePageChange = (pageIndex) => {
    console.log("page: ", pageIndex);
  };

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  // const handleToogleBookMark = (id) => {
  //   setUsers(
  //     users.map((user) => {
  //       if (user._id === id) {
  //         return { ...user, bookmark: !user.bookmark };
  //       }
  //       return user;
  //     })
  //   );
  // };

  // const handleToogleBookMark = (id) => {
  //   if (id == true) {
  //     console.log("if", id);
  //     id = false;
  //   } else if (id == false) {
  //     console.log("id", false);
  //     id = true;
  //     console.log(id);
  //   }
  //   return id;
  // };

  // const handleToogleBookMark = (id) => {
  //   const newCount = users.map((item) => ({
  //     ...item,
  //     bookmark:
  //       item.bookmark !== id ? (item.bookmark = false) : (item.bookmark = true),
  //   }));
  //   console.log(id);
  //   setUsers(newCount);
  // };

  // const handleToogleBookMark = (id) => {
  //   const newCount = users.map((item) => ({
  //     ...item,
  //     bookmark: (item.bookmark = !id),
  //   }));
  //   // console.log(id);
  //   setUsers(newCount);
  // };
  const handleToogleBookMark = (id) => {
    // console.log(id);
    const newCount = users.map((user) => {
      if (user._id === id) {
        return { ...user, bookmark: !user.bookmark };
      }
      return user;
    });
    // console.log(id);
    setUsers(newCount);
  };

  // const handleToogleBookMark = (id) => {
  //   const newCount = users.map((user) => ({
  //     ...user,
  //     bookmark:
  //       user._id === id._id ? (user.bookmark = !id.bookmark) : user.bookmark,
  //   }));
  //   console.log(id.bookmark);
  //   setUsers(newCount);
  // };

  // const handleIncrement = (id) => {
  //   const newCount = counters.map((item) => ({
  //     ...item,
  //     value: item.id === id ? item.value + 1 : item.value,
  //   }));
  //   setCounters(newCount);
  // };

  return (
    <>
      <SearchStatus length={users.length} />
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th scope="col"></th>
              <th />
            </tr>
          </thead>
          <Users
            users={users}
            onDelete={handleDelete}
            onToogle={handleToogleBookMark}
          />
        </table>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default App;
