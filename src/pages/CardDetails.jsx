import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";
import starshipIcon from "../assets/icons/starship.svg";
import card from "../assets/icons/card.svg";
import add from "../assets/icons/add.svg";
import male from "../assets/icons/male.svg";
import female from "../assets/icons/female.svg";
import planetIcon from "../assets/icons/planet.svg";
import vehicleIcon from "../assets/icons/vehicle.svg";

const CardDetails = () => {
  const location = useLocation();
  const { name } = location.state;

  const [individual, setIndividual] = useState({});
  const [vehiclesUrl, setVehiclesUrl] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [spaceShipsUrl, setSpaceShipsUrl] = useState("");
  const [spaceShips, setSpaceShips] = useState([]);
  const [species, setSpecies] = useState([]);
  const [speciesUrl, setSpeciesUrl] = useState("");
  const [planet, setPlanet] = useState([]);
  const [planetUrl, setPlanetUrl] = useState([]);
  const [id, setId] = useState(1);
  const [url, setUrl] = useState("");

  const getSearchResult = async () => {
    try {
      const response = await fetch(
        `https://swapi.dev/api/people/?search=${name}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setUrl(data.results[0].url);
    } catch (error) {
      console.error(error);
    }
  };

  const getSpecies = async () => {
    try {
      const response = await fetch(`${speciesUrl}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSpecies(data.name);
    } catch (error) {
      console.error(error);
    }
  };

  const getVehicles = async () => {
    try {
      const results = await Promise.all(
        vehiclesUrl.map((url, index) =>
          fetch(url)
            .then((response) => response.json())
            .then((data) => ({ index, data }))
        )
      );

      const vehicleNames = results.map(({ data }) => data.name);
      setVehicles(vehicleNames);
    } catch (error) {
      console.log(error);
    }
  };

  const getSpaceShip = async () => {
    try {
      const results = await Promise.all(
        spaceShipsUrl.map(async (url, index) => {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const { name } = await response.json();
          return { index, name };
        })
      );
      const spaceShipNames = results.map(({ name }) => name);
      setSpaceShips(spaceShipNames);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVehicles();
    getSpaceShip();
  }, [vehiclesUrl]);

  const getPlanet = async () => {
    try {
      const response = await fetch(`${planetUrl}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPlanet(data.name);
    } catch (error) {
      console.error(error);
    }
  };

  const getIndividual = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setIndividual(data);
      setSpeciesUrl(data.species[0]);
      setPlanetUrl(data.homeworld);
      setVehiclesUrl(data.vehicles);
      setSpaceShipsUrl(data.starships);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSearchResult();
  }, []);

  useEffect(() => {
    getIndividual();
  }, [url]);

  useEffect(() => {
    getSpecies();
    getPlanet();
  }, [speciesUrl]);

 
  console.log(individual);

  return (
    <section className="px-16 my-4 max-w-[830px]">
      <div className="bg-gray-100 transition rounded-lg pb-4 duration-700 cursor-pointer active:scale-90">
        <div className="flex-cols  w-full px-4 py-2  bg-gray-400 w-full">
          <div className="flex justify-between items-center py-2  ">
            <img src={card} />
            <div className="p-2 bg-white rounded-sm ">
              <img src={add} className="w-5" />
            </div>
          </div>
          <h2 className="text-2xl font-semibold">{individual.name}</h2>
        </div>
        <div className="mt-4 px-8">
          <div className="w-full  h-0.5  my-2 flex items-center justify-between ">
            <div className="flex items-center space-x-2">
              <img src={individual.gender === "male" ? male : female} />
              <p>{individual.birth_year}</p>
            </div>
            <p>{species || "unKnown"}</p>
          </div>

          <hr className="mb-4 mt-4 border-1 border-gray-400" />

          <div className="flex justify-between items-center mt-2 mb-4 p-2 bg-gray-300 rounded-md ">
            <div className="flex space-x-2">
              <img src={planetIcon} className="w-6 h-6" />
              <div>HOMEWORLD </div>
            </div>
            <div>{planet}</div>
          </div>

          {vehicles.map((vehicle, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-center mt-2 mb-4 p-2 bg-gray-300 rounded-md "
              >
                <div className="flex space-x-2">
                  <img src={vehicleIcon} className="w-6 h-6" />
                  <div>VEHICLES </div>
                </div>
                <div>{vehicle}</div>
              </div>
            );
          })}

          {spaceShips.map((starShip, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-center mt-2 mb-4 p-2 bg-gray-300 rounded-md "
              >
                <div className="flex space-x-2">
                  <img src={starshipIcon} className="w-6 h-6" />
                  <div>Starship </div>
                </div>
                <div>{starShip}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CardDetails;
