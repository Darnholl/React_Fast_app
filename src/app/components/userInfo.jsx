import React, { useState, useEffect } from "react";
import api from "../api";
import QualitiesList from "./qualitiesList";
import PropTypes from "prop-types";

const UserInfo = ({ match, history }) => {
    const userId = match.params.userId;
    // const [users, setUsers] = useState();
    const [testId, setTestId] = useState();
    const handleToAllUsers = () => {
        history.replace("/users");
    };
    useEffect(() => {
        // api.users.fetchAll().then((data) => setUsers(data));
        api.users.getById(userId).then((data) => setTestId(data));
    }, []);

    // useEffect(() => {
    //     console.log(testId.name);
    // }, [users]);
    // if (users) {
    //     const index = users.findIndex((user) => user._id === userId).toString();
    //     // console.log("ID", index);

    //     return (
    //         <div>
    //             <h1>{users[index].name}</h1>
    //             <h2>Профессия: {users[index].profession.name}</h2>
    //             <h4>
    //                 Качества:
    //                 <QualitiesList qualities={users[index].qualities} />
    //             </h4>
    //             <h4>Проверка ID(тест): {userId} </h4>
    //             <h4>completedMeetings: {users[index].completedMeetings}</h4>
    //             <h2>Rate: {users[index].rate}</h2>
    //             <button>Все пользователи</button>
    //         </div>
    //     );
    // }
    if (testId) {
        return (
            <div>
                <h1>{testId.name}</h1>
                <h2>Профессия: {testId.profession.name}</h2>
                <h4>
                    <QualitiesList qualities={testId.qualities} />
                </h4>
                <h4>completedMeetings: {testId.completedMeetings}</h4>
                <h2>Rate: {testId.rate}</h2>
                <button
                    onClick={() => {
                        handleToAllUsers();
                    }}
                >
                    Все пользователи
                </button>
            </div>
        );
    }
    return <h1>Loading</h1>;
};

UserInfo.propTypes = {
    match: PropTypes.object,
    history: PropTypes.object
};

export default UserInfo;
