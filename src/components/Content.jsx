import React from 'react'
import '../App.css'

function Content({ items }) {
   
    return (
        <div className="content">
            <h1>Astronomy Picture of the Day</h1>
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
                    <img src={items.url} alt="astronomy pic of the day" className="image"/>
                </div>
                ) 
            }
                <div className="desc-container">
                    <h2 className="title">{items.title}</h2>
                    <span>{items.date}</span>
                    <p className="explanation">{items.explanation}</p>
                </div>
            </div>
        </div>
    )
}

export default Content
