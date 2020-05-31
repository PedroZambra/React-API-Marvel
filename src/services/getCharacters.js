export default function getCharacters() {
    const apiURL = `https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=${process.env.REACT_APP_MARVEL_APIKEY}`;
    
    return fetch(apiURL)
      .then(res => res.json())
      .then(data => {
          console.log(data)
        return data.data.results
      })
}

