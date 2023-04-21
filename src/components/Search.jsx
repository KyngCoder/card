import React, { useContext, useEffect, useState } from 'react'
import { FilterContext } from '../context/Filter';

const Search = () => {
    
    const [result, setResult] = useState([])
    const { searchTerm } = useContext(FilterContext);

    console.log(searchTerm)

    const getSearchResult = async () => {
        try {
            const response = await fetch(`https://swapi.dev/api/people/?search=${searchTerm}`);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data)
          } catch (error) {
            console.error(error);
          }
    }

    useEffect(()=>{
getSearchResult()
    }, [searchTerm])

  return (
    <div>Search</div>
  )
}

export default Search