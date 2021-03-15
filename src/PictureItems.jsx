import React from 'react'
import './App.css'

function PictureItems({ items }) {
   
    return (
        <div className="pic-items">
           
            
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
                <div className="image-container">
                    <img src={items.url} alt="photo" className="image"/>
                </div>
                ) 
            }
                <div className="desc-container">
                    <h2 className="title">{items.title}</h2>
                    <div className="explanation">{items.explanation}</div>
                </div>
            </div>
        </div>
    )
}


export default PictureItems
