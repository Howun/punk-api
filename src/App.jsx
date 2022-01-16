import React, { useState, useEffect } from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";

function App() {
  const [beerArr, setBeerArr] = useState([]);
  const [newURL, setNewURL] = useState(""); /*not used yet for the checklist toggle*/
  const [searchTerm, setSearchTerm] = useState("");
    const [beerObj, setBeerObj] = useState("");

  useEffect(() => {
    const URL = `https://api.punkapi.com/v2/beers?${newURL}`;
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((beers) => {
        setBeerArr(beers);
        setBeerObj(beers)
      });
 
  }, [newURL]
  );

  const handleInput = (event) => {
    const searchInput = event.target.value.toLowerCase();
    setSearchTerm(searchInput);
  };

  const filteredBeers = beerArr.filter((beers) => {
    const beerNameLowerCase = beers.name.toLowerCase();
    return beerNameLowerCase.includes(searchTerm);
  });

    const handleSubmitABV = (event) => {
      const abv = event.target.checked;
      if (abv === true) {
        setNewURL("abv_gt=6");
      } else {
        setNewURL("");
      }
    };

    const handleSubmitBrewDate = (event) => {
      const date = event.target.checked;
      if (date === true) {
        setNewURL("brewed_before=1-2010");
      } else {
        setNewURL("");
      }
    };

    const handleSubmitPH = (event) => {
      const ph = event.target.checked;
      const findPH = beerArr.filter((beers) => {
        return beers.ph > 0 && beers.ph < 4;
      });
      if (ph === true) {
        setBeerArr(findPH);
      } else {
        setBeerArr(beerObj);
      }
    };




  return (
    <div className="home">
      <NavBar
        className="navBar"
        handleInput={handleInput}
        searchTerm={searchTerm}
        handleSubmitBrewDate={handleSubmitBrewDate}
        handleSubmitABV={handleSubmitABV}
        handleSubmitPH={handleSubmitPH}
      />
      <Main className="main" beerArr={filteredBeers} />
    </div>
  );
}

export default App;
