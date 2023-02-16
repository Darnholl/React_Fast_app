import React from "react";

const Quantite = (props) => {
  return props.qualities.map((qualitie, index) => {
    return (
      <span key={index} className={"badge bg-" + qualitie.color + " m-2"}>
        {qualitie.name}
      </span>
    );
  });
};

export default Quantite;
