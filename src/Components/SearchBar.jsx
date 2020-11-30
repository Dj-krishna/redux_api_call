import React, { useState } from 'react'

const SearchBar = (props) => {
    
    return (
        <>
            <input className="search"
                    type="text" 
                    placeholder="Search here..."
                    onChange={(e) => props.onSearch(e.target.value)} />
                    <br />
        </>
    )
}

export default SearchBar
