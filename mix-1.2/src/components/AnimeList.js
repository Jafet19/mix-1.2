import React from 'react';
import PostCards from './PostCards';

function AnimeList({anime}){
    const cards = anime.map((anime)=>{
        return(
        <PostCards
        key={anime.id}
          anime={anime}
        />
    )})
    return(
        <div className='Info'>
            {cards}
        </div>
    )
}
export default AnimeList