import React from "react";
import PropTypes from "prop-types";

const SearchPanel = ({ onChange, value }) => {
    return (
        <input
            value={value}
            onChange={onChange}
            placeholder="Search..."
        ></input>
    );
};

SearchPanel.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default SearchPanel;
