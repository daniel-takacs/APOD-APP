import React, {useState, useEffect} from 'react'

function Form() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([])
   
    useEffect(() =>{
        fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
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
        console.log(items)
        if (error) {
            return <div>Error: {error.message}</div>
        }else if (!isLoaded) {
            return <div>Loading...</div>
        }else {
            return (
                <div>
                   <div>{items.date}</div>
                   <div>{items.title}</div>
                        <img
                            src={items.hdurl}
                        />
                  <div>{items.explanation}</div>
               </div>
            )
            }
        
}

export default Form
