import React, { useState, useEffect } from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";

function App() {
  const [beerArr, setBeerArr] = useState([]);
  const [newURL, setNewURL] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const URL = `https://api.punkapi.com/v2/beers?per_page=80${newURL}`;
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((beers) => {
        setBeerArr(beers);
      });
  }, [newURL]);

  const handleInput = (event) => {
    const searchInput = event.target.value.toLowerCase();
    setSearchTerm(searchInput);
  };

  const filteredBeers = beerArr.filter((beer) => {
    const beerNameLowerCase = beer.name.toLowerCase();
    return beerNameLowerCase.includes(searchTerm);
  });


  return (
    <div className="home">
      <NavBar handleInput={handleInput} searchTerm={searchTerm} />
      <Main beerArr={filteredBeers} />
    </div>
  );
}

export default App;
