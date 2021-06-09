import axios from 'axios'
import React, {useState} from 'react'
import {Result} from './Result'
const MusicSearch = () =>{
  const [query, setQuery] = useState('');
  const [music, setMusic] = useState([])
     const [audio, setAudio] = useState('')

  const [error, setError] = useState('')

  const getMusic = async (evt)=> {
    evt.preventDefault()
     
   const options = {
     method: 'GET',
     url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
     params: {
       q: query
     },
     headers: {
       'x-rapidapi-key': 'a44c1ad304mshf129460914513c3p1d2e6cjsne05b1b9d436c',
       'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
     }
   };

   try{
     const res = await axios.request(options)

     setMusic(res.data.data)
     //console.log(res.data.data)
   }catch(err){
     setError(err.message)
   }

  }
 


  return (
    <div>
      <form onSubmit= {getMusic}>
        <input type="text" name="query" value = {query} onChange ={(evt)=> setQuery(evt.target.value)}/>
        <button>Search</button>
      </form>
      <div style ={{backgroundColor:'red'}}>
           <audio id ="my-audio"
              controls autoPlay
              src = {audio} >
              
          </audio>
      </div>
      <div className="displayResults">
        {error ? <h3>{error}</h3>:music.map((item) => (
          <div onClick = {
            () => setAudio(item.preview)
          }
          key = {
            item.id
          } >
            <Result item = {item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MusicSearch