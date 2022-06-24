import React, { ChangeEvent, useRef } from "react";

export const SearchBar = () => {
  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      // Todo
      console.log("debounced value: ", event.target.value);
    }, 500);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Search Location..."
        onChange={onQueryChange}
      />
    </div>
  );
};
