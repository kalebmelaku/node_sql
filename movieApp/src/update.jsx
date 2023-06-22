import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export default function Update() {
const location = useLocation()
    const id = location.pathname.split('/')[2]
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState('')
    const [desc, setDesc] = useState('')
    const [year, setYear] = useState('')
  
    const navigate = useNavigate()
  
    const handleSubmit = async (e)=>{
      e.preventDefault();
      // setItems(prev=>({...prev, [e.target.name]: e.target.value}))
      // console.log(title)
      try{
        await axios.put(`http://localhost:5000/update/${id}`, {
        title: title,
        rating: rating,
        description: desc,
        date: year,
      })
      navigate('/');
      }catch(err){
        console.log(err.message);
      }
    }
  return (
    <>

<h1>Update Movie</h1>
<form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input 
      type="text" 
      name="title" 
      id="title" 
      value={title}
      onChange={(e) => setTitle(e.target.value)} />

      <label htmlFor="desc">Description</label>
      <input type="text" name="desc" id="desc" 
  value={desc}
      onChange={(e) => setDesc(e.target.value)} />

      <label htmlFor="rating">Rating</label>
      <input type="number" name="rating" id="rating" max={10} min={0} step={0.01} 
      value={rating}
      onChange={(e) => setRating(e.target.value)} />

      <label htmlFor="year">Year</label>
      <input type="number" name="year" id="year" 
      value={year}
      onChange={(e) => setYear(e.target.value)} />

      <button type="submit">Add Movie</button>
    </form>
    </>
  )
}
