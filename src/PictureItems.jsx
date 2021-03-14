import React from 'react'
import './App.css'

function PictureItems({ items }) {
    return (
        <div className="pic-items">
            <div className="date">{items.date}</div>
            <div className="title">{items.title}</div>
            <img className="image" src={items.hdurl} alt="picture-of-the-day"/>
            <div className="explanation">{items.explanation}</div>
        </div>
    )
}

export default PictureItems
