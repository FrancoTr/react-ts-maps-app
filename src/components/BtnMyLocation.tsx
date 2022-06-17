import React from "react";

export const BtnMyLocation = () => {
  return (
    <button
      className="btn btn-primary"
      style={{ position: "fixed", top: "20px", right: "20px", zIndex: "999" }}
    >
      My Location
    </button>
  );
};
