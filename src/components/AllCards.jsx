import React, { useState, useEffect, useContext } from 'react';
import { FilterContext } from '../context/Filter';
import Card from './Card';
import Search from './Search';


const AllCards = () => {
  const [info, setInfo] = useState([]);
  const { filter, clicked } = useContext(FilterContext);

  // alphabet
  function sortObjectsByName(objects) {

    if(filter === 'alphabet'){

    return objects.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  } else if(filter === "youngest"){
    return objects.sort((a, b) => {
      const dobA = parseInt(a.birth_year); // parse DOB string to integer
      const dobB = parseInt(b.birth_year); // parse DOB string to integer
      return dobA - dobB;
    });
  }
  else return objects.sort((a, b) => {
    const dobA = parseInt(a.birth_year); // parse DOB string to integer
    const dobB = parseInt(b.birth_year); // parse DOB string to integer
    return dobB - dobA;
  });

  }

  


  const getInfo = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/people');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const result = sortObjectsByName(data.results, filter )
      setInfo(result);
    } catch (error) {
      console.error(error);
    }
  };

  

  useEffect(() => {
    getInfo();
    
  }, [filter, clicked]);

 console.log(filter)
 console.log(info)

 console.log(clicked)
 

  return (

    <>
    {clicked === true ? (
      <Search />
    ) : (
      <div className="grid md:grid-cols-2 lg:grid-cols-5 grid-cols-1 gap-4 px-8 mt-4 pl-16 mb-8">
        {info.map((item, index) => (
          <Card key={item.name + index} info={item} />
        ))}
      </div>
    )}
  </>
    
  );
};

export default AllCards;
