import { useEffect, useState } from 'react';
import React  from 'react'
import Youtube from 'react-youtube';
import './MovieRows.css';
import { imageUrl , API_KEY} from '../../constants/constants';
import axios from '../../axios';  //calling manually written axios here

const MovieRows = (props) => {

  const [movies, setMovies] = useState([]);

  const [urlid, setUrlId] = useState('');

  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovies(response.data.results);

    },[]);
    // .catch((err) => alert('Network Error'));
  });

  const opts = {
    height: '390',
    width: '100%',
    playerVars : {
      autoplay : 1
    }
  };

  const handleTrailer = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data);
      if(response.data.results.length !== 0){
        setUrlId(response.data.results[0]);
      }else{
        console.log('Array Empty');
      }
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((movie) => 
            <img onClick={()=>handleTrailer(movie.id)} className={props.isSmall ? 'small-poster' : 'movie-poster'} src={`${imageUrl + movie.backdrop_path}`}  alt='poster'/>
          )}
            
        </div>

        { urlid && <Youtube videoId={urlid.key} opts={opts}/>}

    </div>
  )
}

export default MovieRows