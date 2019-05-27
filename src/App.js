import React from 'react';
import './App.css';
import shield from './img/shield.png'
import Character from './Components/Character.js';

class AppMarvel extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      characters: [],
      search:''
    }
    this.updateSearch = this.updateSearch.bind(this);
  }

  componentDidMount(){
    fetch('https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&limit=50&apikey=3807b873586a20c861ef6a4be192963a')
    .then(res => res.json())
    .then(character => {
      console.log(character.data.results);
      this.setState({ characters: character.data.results}) 
    })
  }

  //SEARCH
  updateSearch(event){
    this.setState({search:event.target.value.substr(0,30)});
  }

  render(){
    //FILTER
    let filterCharacter = this.state.characters.filter(
      (hero) => {return hero.name.toLowerCase().indexOf(this.state.search.toLowerCase())!== -1}
    );
    
    if(this.state.characters.length>0){
      return(
        <div>
          <header>
            <h1>MARVEL</h1>
          </header>
          <input type="search" value={this.state.search} onChange={this.updateSearch} placeholder="Buscador" id="search"/>
          <div className="container">
            {filterCharacter.map((pj, index) => <Character key={index} name={pj.name} photo={pj.thumbnail.path} ext={pj.thumbnail.extension} shop={pj.urls[0].url}/>)}
          </div>
        </div>
        
      )
    }
    return(
      <div className="load">
        <img src={shield} className="shield"/>
        <h1>Cargando <span className="points">...</span></h1>
      </div>
    )
  }
}

export default AppMarvel;
