import React, {useState, useEffect} from 'react'
import nasaLogo from './nasa-logo.jpg'
import PictureItems from './PictureItems'
import './App.css'

function Form() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([])
   
    useEffect(() =>{
        fetch(`https://api.nasa.gov/planetary/apod?api_key=yF5XishREd40vysqeqpv3njo49QDSapRjqDXbQp2`)
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
        }, [])
        if (error) {
            return <div>Error: {error.message}</div>
        }else if (!isLoaded) {
            return <img src={nasaLogo} alt="nasa-logo"/>
        }else {
            return (
                <div className="form">
                    <PictureItems items={items}/>
               </div>
            )
            }
        
}

export default Form
