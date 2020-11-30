import React from 'react'


export const Globalfilter = ({filter, setFilter}) => {
    

    return (
        <>
         Search: {' '}
         <input value={filter || ''} onChange={(e) => setFilter(e.target.value)} />   
        </>
    )
}

