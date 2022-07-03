import React from "react";

export const SearchResults = () => {
  return (
    <ul className="list-group mt-3">
      <li className="list-group-item list-group-item-action">
        <h6>Name</h6>
        <p className="text-muted" style={{ fontSize: "12px" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, laborum facere
          obcaecati.
        </p>
        <button className="btn btn-outline-primary">Addresses</button>
      </li>
    </ul>
  );
};
