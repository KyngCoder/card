import React, { useState, useEffect } from 'react';
import Card from './Card';

const AllCards = () => {
  const [info, setInfo] = useState([]);

  const getInfo = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/people');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setInfo(data.results );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

 

  return (
    <div className="grid grid-cols-5 gap-2 px-8 mt-4 pl-16">
     
      { info.map((item, index ) => <Card key={item + index } info={info[index]} /> ) }
    </div>
  );
};

export default AllCards;
