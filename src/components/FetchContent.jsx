import React, {useState, useEffect} from 'react'
import nasaLogo from '../assets/images/tenor.gif'
import PictureItems from './PictureItems'
import '../App.css'
import '../index.css'

const ApiKey = process.env.REACT_APP_API_KEY

function FetchContent() {

    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([])
    const [date, setDate] = useState("")
   
    const dateHandle = (e)=> {
        setDate(e.target.value)
    }
    console.log(date)

    useEffect(() =>{
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${ApiKey}&date=${date}`)
            .then(response => response.json())
            .then((result) => {
                    setIsLoaded(true)
                    setItems(result)
            },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
            }
            )
        }, [date])
        if (error) {
            return <div>Error: {error.message}</div>
        }else if (!isLoaded) {
            return <div className="loading-logo" ><img src={nasaLogo} alt="nasa-logo"/></div>
        }else {
            return (
                <div className="form">
                    <h1>Astronomy Picture of the Day</h1>
                    <div className="date-input">
                        <label>Select a date</label>
                        <input type="date" id="date" value={items.date} onChange={dateHandle}/>
                    </div>
                    <PictureItems items={items}/>     
               </div>
            )
            }
        
}

export default FetchContent
