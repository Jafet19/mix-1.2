// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Music(){
//     const CLIENT_ID = "6fa0162d75d24c89a6cfeaa994eca54f"
//     const SECRET_KEY = "83897af48fd741e48b4b8d36c29323af"

//     const [token, setToken] = useState('')
//     const [searchInput, setSearchInput] = useState('') 
//     const [searchResult, setSearchResult] = useState([])

//     useEffect(() => {

//         axios('https://accounts.spotify.com/api/token', {
//           headers: {
//             'Content-Type' : 'application/x-www-form-urlencoded',
//             'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
//           },
//           data: 'grant_type=client_credentials',
//           method: 'POST'
//         })
//         .then(tokenResponse => {      
//           setToken(tokenResponse.data.access_token);
    
//           axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
//             method: 'GET',
//             headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
//           })
//           .then (genreResponse => {        
//             setGenres({
//               selectedGenre: genres.selectedGenre,
//               listOfGenresFromAPI: genreResponse.data.categories.items
//             })
//           });
          
//         });
//     }, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]);

//     return(
//         <form className="searchbar">
//       <input
//         type="text"
//         id="search"
//         placeholder="Search Anime"
//         onKeyPress={e => {
//             if (e.key == 'Enter') {
//                 search()
//             }
//         }}
//         onChange={(e) => setSearchInput(e.target.value)}
//       />
//       <button type="submit" onClick={search}>🔍</button>
//     </form>
//     )
// }
// export default Music