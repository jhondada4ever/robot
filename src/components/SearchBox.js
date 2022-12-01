import React from "react";

const SearchBox = ({ test, searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="saerch"
        placeholder="search robots"
        onChange={searchChange}
      />
      ;
    </div>
  );
};

export default SearchBox;
