import React from 'react'

function Header({items, dateHandle}) {
    return (
            <div className="header">
                <div className="date-input">
                    <label>Select a date</label>
                    <input type="date" value={items.date}id="date" onChange={dateHandle}/>
                </div>   
            </div>
    )
}

export default Header
