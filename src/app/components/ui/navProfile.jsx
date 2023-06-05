import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const NavProfile = () => {
    const { currentUser } = useAuth();
    const [isOpen, setOpen] = useState(false);
    const toogleMenu = () => {
        setOpen((prevState) => !prevState);
    };
    return (
        <div className="dropdown" onClick={toogleMenu}>
            <div className="btn dropdown-toogle d-flex align-items-center">
                <div className="me-2">{currentUser.name}</div>
                <img
                    src={currentUser.image}
                    alt=""
                    height="40"
                    className="img-responsive rounded-circle"
                />
            </div>
            <div className={"w-100 dropdown-menu" + (isOpen ? " show" : "")}>
                <Link
                    to={`/users/${currentUser._id}`}
                    className="dropdown-item"
                >
                    Profile
                </Link>
                <Link to="/logout" className="dropdown-item">
                    Log Out
                </Link>
                <h1>some text</h1>
            </div>
        </div>
    );
};

export default NavProfile;
