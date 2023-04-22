import React from "react";
import starship from "../assets/icons/starship.svg";
import card from "../assets/icons/card.svg";
import add from "../assets/icons/add.svg";
import male from "../assets/icons/male.svg";
import female from "../assets/icons/female.svg";
import planet from "../assets/icons/planet.svg";
import vehicle from "../assets/icons/vehicle.svg";
import { useNavigate } from "react-router-dom";

const Card = ({ info }) => {

  const navigate = useNavigate()

  const navigateToDetails = (name) => {
 
    navigate('/details',{state:{"name":name}})
  }

  return (
    <section onClick={() => navigateToDetails(info.name)} className="  bg-gray-100 transition rounded-lg pb-4 duration-700 cursor-pointer active:scale-90">
      <div className="flex-cols  w-full px-4 py-2  bg-gray-400 w-full">
        <div className="flex justify-between items-center py-2  ">
          <img src={card} />
          <div className="p-2 bg-white rounded-sm ">
            <img src={add} className="w-5" />
          </div>
        </div>
        <h2 className="text-2xl font-semibold">{info.name}</h2>
      </div>
      <div className="mt-4 px-8">
        <div className="w-full  h-0.5 bg-gray-500 flex items-center justify-between ">
          <div className="flex items-center">
            <img src={info.gender === "male" ? male : female} />
            <p>{info.birth_year}</p>
          </div>

          <p>Species</p>
        </div>

        <div className="flex justify-between items-center mt-2 mb-4 p-2 bg-gray-300 rounded-md">
          <div className="flex space-x-2">
            <img src={planet} className="w-6 h-6" />
            <div>HOMEWORLD </div>
          </div>
          <div>Planet</div>
        </div>
        <div className="flex justify-between items-center mt-2 mb-4 p-2 bg-gray-300 rounded-md">
          <div className="flex space-x-2">
            <img src={vehicle} className="w-6 h-6" />
            <div>VEHICLES</div>
          </div>
          <div>{info.vehicles?.length}</div>
        </div>
        <div className="flex justify-between items-center mt-2 mb-4 p-2 bg-gray-300 rounded-md">
          <div className="flex space-x-2">
            <img src={starship} className="w-6 h-6" />
            <div>STARSHIPS </div>
          </div>
          <div>{info.starships?.length}</div>
        </div>
      </div>
    </section>
  );
};

export default Card;
