import React , {useEffect, useState} from 'react'
import'./Banner.css';
import {API_KEY} from '../../constants/constants';
import { imageUrl } from '../../constants/constants';
import axios from '../../axios';  //calling manually written axios here

const Banner = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=> {
      console.log(response.data.results);
      setMovies(response.data.results);
    })
  }, []);

  const randomMovieIndex = Math.floor(Math.random() * movies.length);
  const movie = movies[randomMovieIndex];

  return (
    <div style={{backgroundImage : `url(${movie ? imageUrl+movie.backdrop_path : ""})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner-btn'>
                <button className='btn'>Play</button>
                <button className='btn'>My List</button>
            </div>

            <h1 className='desc'>{movie ? movie.overview : ""}</h1>
        </div>

        <div className='bottom-fade'>
            
        </div>
    </div>
  )
}

export default Banner