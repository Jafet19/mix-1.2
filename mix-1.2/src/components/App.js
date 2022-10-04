import React, {useState, useEffect} from 'react';
import Header from './Header'
import AnimeList from './AnimeList';
import PostCards from './PostCards';


function App() {

  const [anime, setAnime] = useState([])

    useEffect(()=>{
        fetch(' http://localhost:3000/Anime')
        .then((res) => res.json())
        .then(data => setAnime(data))
      },[])

  return(
    <div className="App">
          <Header />
          <AnimeList anime={anime}/>
      </div>
  )

}

export default App;
