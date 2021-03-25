import React, {useState, useEffect} from 'react'
import nasaLogo from '../assets/images/tenor.gif'
import Content from './Content'
import '../App.css'
import Header from './Header'

const ApiKey = process.env.REACT_APP_API_KEY

function FetchContent() {

    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([])
    const [date, setDate] = useState("")
   
    const dateHandle = (e)=> {
        setDate(e.target.value)
    }

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
            return <div className="loading-logo" >
                        <img src={nasaLogo} alt="nasa-logo"/>
                    </div>
        }else {
            return (
                <>
                    <Header items={items} dateHandle={dateHandle}/>
                    <Content items={items}/>     
                </>
                )
            }
        
}

export default FetchContent
