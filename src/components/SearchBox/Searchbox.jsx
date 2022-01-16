import React from 'react'
import "./SearchBox.scss"


const Searchbox = (props) => {
  const {searchTerm, handleInput} = props;
  return (
    <>
      <form className="search-box">
        <input
          type="text"
          value={searchTerm}
          onInput={handleInput}
          placeholder="Search..."
          className="search-input"
        />
      </form>
    </>
  );
}



export default Searchbox
