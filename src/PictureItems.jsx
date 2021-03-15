import React from 'react'
import './App.css'

function PictureItems({ items }) {
   
    return (
        <div className="pic-items">
            <div className="date">{items.date}</div>
            <div className="title">{items.title}</div>
            <div className="content-container">
            {items.media_type === "video" ? (
                <div className="iframe-container">
                <iframe 
                    className="video" src={items.url} title="picture-of-the-day"
                    frameBorder="0"
                    allow="encrypted-media"
                    allowFullScreen/> 
                </div>    
                ) : (
                <img src={items.hdurl} alt="photo" className="image"/>
                ) 
            }
            <div className="explanation">{items.explanation}</div>
            </div>
        </div>
    )
}


export default PictureItems
