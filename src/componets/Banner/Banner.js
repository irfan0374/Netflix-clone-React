import React,{useEffect, useState} from 'react'
 import {Api_key,imageUrl} from '../constant/constant'
import axios from '../../axios'
import './Banner.css'

const Banner = () => {

  const [count,setCount]=useState(0)
  const [movie,setMovie]=useState()
  useEffect(()=>{
    const randomRandom=Math.floor(Math.random()*20)
    axios.get(`trending/all/week?api_key=${Api_key}&language=en-US`).then((response)=>{
      setMovie(response.data.results[randomRandom])
    })
  },[])
  return (
    <div className='banner'
     style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>

            <div className='banner_buttons'>
                <button className='button' onClick={()=>
                  setCount(count+1)
                }>play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie?movie.overview:""}</h1>

        </div>
       <div className="fade_bottom"></div>

    </div>
  )
}


export default Banner 