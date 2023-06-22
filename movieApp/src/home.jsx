import React, { useEffect, useState } from 'react'
import cover from './assets/friday.jpg'
import './main.css'
import axios from 'axios';
import {Link} from 'react-router-dom'

export default function Home() {
    const [movie, setMovie] = useState([]);


    useEffect(()=>{
        const fetchAllMovies = async ()=>{
           const res = await axios.get('http://localhost:5000/movies')
           setMovie(res.data);
        }

        fetchAllMovies()
        
    })
        const deleteMovie = async (id)=>{
            const res = await axios.delete(`http://localhost:5000/movies/${id}`)
        }
  return (
    <>
        <div className="container">

            {movie.map(mov=>(
                <div className="box" key={mov.id}>
                <img src={mov.cover = ' ' ? cover : mov.cover} alt="cover-image" />
                <div className="desc">
                    <div className="title">
                        <h2>{mov.title}</h2>
                        <div>
                            <Link style={{cursor: 'pointer'}} to={`/update/${mov.id}`} >E</Link>
                            <p style={{cursor: 'pointer'}} onClick={()=>deleteMovie(mov.id)} >X</p>
                        </div>
                    </div>
                    <p>{mov.description}</p>
                </div>
                <div className="rating">
                    <p>{mov.rating}</p>
                    <p>{mov.date}</p>
                </div>
            </div>
            ))}
            
        </div>
        <button>
            <Link to='/add'>Add New Movie</Link>
        </button>
    </>
  )
}
