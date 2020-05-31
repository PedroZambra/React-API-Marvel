import React, {useState, useEffect} from 'react';
import './App.css';

import Header from './components/Header.js';
import Character from './components/Character.js';
import getCharacters from './services/getCharacters';
import shield from './img/shield.png'

function AppMarvel() {
  const [characters, setCharacters] = useState([])
  const [keyword, setKeyword] = useState('')

  useEffect(function() {  
    getCharacters().then(characters => setCharacters(characters))
  }, [])

  const handleSearch = event => {
    setKeyword(event.target.value)
  }

  const handleFilterCharacter = characters.filter( hero => {
    return hero.name.toLowerCase().indexOf(keyword.toLowerCase())!== -1
  })

  if(characters.length>0){
    return (
      <div>
        <Header/>
        <section>
          <form>
            <input type="search" value={keyword} onChange={handleSearch} placeholder="Buscador" id="search"/>
          </form>
          <div className="container">
            {handleFilterCharacter.map((getCharacter) => Character(getCharacter))}
          </div>
        </section>
      </div>
    )
  } else {
    return(
      <div className="load">
        <img src={shield} className="shield" alt=""/>
      </div>
    )
  }
}

export default AppMarvel;
