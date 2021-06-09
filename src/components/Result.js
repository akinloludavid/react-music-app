import React from 'react'
 export const Result = ({item}) => {
  return (
   
   
    <div className = "audio-card"
     >
              <h3>Title: {item.title}</h3>
              <p>Artist: {item.artist.name}</p>
    </div>
  )
}

