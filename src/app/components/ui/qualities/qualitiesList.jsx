import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
import { useQuality } from "../../../hooks/useQuality";

const QualitiesList = ({ qualities }) => {
    // console.log("Тест ", qualities);
    const { isLoading, getQuality } = useQuality();
    const qualArray = getQuality(qualities);
    if (!isLoading) {
        return (
            <>
                {qualArray.map((qual) => (
                    <Quality key={qual._id} {...qual} />
                ))}
            </>
        );
    } else {
        return "Loading...";
    }
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
