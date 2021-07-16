import React from 'react'
import {useState} from 'react'

const SearchBar = (props) =>
{


    const handleSearch = (e) => {
        props.setSearch(e.target.value);
    }

    return(
        <div>
            <input type="text" placeholder="Filter" onChange={handleSearch} /> 
           
        </div>
    )
}

export default SearchBar