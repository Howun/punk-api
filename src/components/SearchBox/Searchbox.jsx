import React from 'react'


const Searchbox = (props) => {
  const {searchTerm, handleInput} = props;
  return (
    <div>
      <form className="search-box">
        <input type="text" value={searchTerm} onInput={handleInput}className="search-input" />
      </form>
    </div>
  )
}



export default Searchbox
