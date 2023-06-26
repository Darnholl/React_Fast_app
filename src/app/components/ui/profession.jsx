import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
    getProfessionsById,
    loadProfessionsList
} from "../../store/professions";

const Profession = ({ _id }) => {
    const dispatch = useDispatch();
    const professionObj = useSelector(getProfessionsById(_id));
    // console.log(professionObj.name);
    useEffect(() => {
        dispatch(loadProfessionsList());
    }, []);
    return <p>{professionObj.name}</p>;
};
Profession.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string
};
export default Profession;
