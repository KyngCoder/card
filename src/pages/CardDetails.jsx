import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../components/Card'
import starship from "../assets/icons/starship.svg";
import card from "../assets/icons/card.svg";
import add from "../assets/icons/add.svg";
import male from "../assets/icons/male.svg";
import female from "../assets/icons/female.svg";
import planet from "../assets/icons/planet.svg";
import vehicle from "../assets/icons/vehicle.svg";

const CardDetails = () => {

    const location = useLocation()
    const {name} = location.state 
    console.log(name)

    function findNameByUrl(url, data) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].people.includes(url)) {
            console.log(data[i].name)
            return data[i].name;
          }
        }
        return "No name found for the given url.";
      }
      

    const [individual, setIndividual] = useState({})
    const [vehicles,setVehicles] = useState([])
    const [spaceSips,setSpaceShips] = useState([])
    const[species, setSpecies] = useState([])
    const [speciesUrl, setSpeciesUrl] = useState("")
    const [planet,setPlanet] = useState([])
    const [id, setId] = useState(1)
    const [url,setUrl] = useState("")

    const getSearchResult = async () => {
        try {
          const response = await fetch(
            `https://swapi.dev/api/people/?search=${name}`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          console.log(data.url)
          setUrl(data.results[0].url)

        } catch (error) {
          console.error(error);
        }
      };

      const getSpecies = async () => {
        try {
            console.log(speciesUrl[0])
            const response = await fetch('https://swapi.dev/api/species/');
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data)
            setSpecies(data.results)
       
          } catch (error) {
            console.error(error);
          }
        
      }

      const getIndividual = async () => {
        try {
            console.log(url)
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          console.log(data)
          setIndividual(data)
          setId(data.url.charAt(data.url.length -2))
          setSpeciesUrl(data.species)
        } catch (error) {
          console.error(error);
        }
      };
    
    
      useEffect(() => {
        getSearchResult();
        getIndividual()
        findNameByUrl(url, species)
      
      },[url] );

      useEffect(() => {
        getSpecies()
      }, [speciesUrl])
    
      console.log(url)
      console.log(individual)
      console.log(speciesUrl)
      console.log(id)

   

  return (
    <section className='px-16 my-4 max-w-[830px]'>
        <div className='bg-gray-100 transition rounded-lg pb-4 duration-700 cursor-pointer active:scale-90'>
        <div className="flex-cols  w-full px-4 py-2  bg-gray-400 w-full">
        <div className="flex justify-between items-center py-2  ">
          <img src={card} />
          <div className="p-2 bg-white rounded-sm ">
            <img src={add} className="w-5" />
          </div>
        </div>
        <h2 className="text-2xl font-semibold">{individual.name}</h2>
      </div>
      <div>
      <div className="w-full  h-0.5  pt-4 px-4 flex items-center justify-between ">
          <div className="flex items-center space-x-2">
            <img src={individual.gender === "male" ? male : female} />
            <p>{individual.birth_year}</p>
          </div>
          {/* {species.length === 0? <p>unknown</p> :

        <p>{species.name}</p>
    
} */}
          
        </div>
      </div>
        </div>
    </section>
  )
}

export default CardDetails