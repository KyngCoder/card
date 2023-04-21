import React from 'react';
import starship from '../assets/icons/starship.svg'
import card from '../assets/icons/card.svg'
import add from '../assets/icons/add.svg'

const Card = ({info}) => {

    console.log(info)

  return (
    <section className="  bg-gray-100 w-4/5 rounded-lg ">
      <div className="flex-cols h-1/5 w-full px-4 py-2  bg-gray-400 w-full">
        <div className="flex justify-between items-center py-2  ">
          <img src={card} />
          <div className='p-2 bg-white rounded-sm '>
            <img src={add} className="w-5" />
          </div>
        </div>
        <h2 className="text-2xl font-semibold">{info.name}</h2>
      </div>
      <div className="mt-4 px-8">
        <div className="w-full  h-0.5 bg-gray-500 flex items-center justify-between ">
          <div className="flex items-center">
            ♂️ <p>Birthday </p>
          </div>

          <p>human </p>
          
        </div>

        <hr className="my-2" />
        

        <div className="flex justify-between items-center mt-2 mb-4 p-2 bg-gray-300 rounded-md">
          <div className="flex space-x-2">
            <img src="" className="w-6 h-6" />
            <div>HOMEWORLD </div>
          </div>
          <div>Value 1</div>
        </div>
        <div className="flex justify-between items-center mt-2 mb-4 p-2 bg-gray-300 rounded-md">
          <div className="flex space-x-2">
            <img src={starship} className="w-6 h-6" />
            <div>STARSHIP </div>
          </div>
          <div>Value 4</div>
        </div>
        <div className="flex justify-between items-center mt-2 mb-4 p-2 bg-gray-300 rounded-md">
          <div className="flex space-x-2">
            <img src={starship} className="w-6 h-6" />
            <div>STARSHIP </div>
          </div>
          <div>Value 4</div>
        </div>
        <div className="flex justify-between items-center mt-2 mb-4 p-2 bg-gray-300 rounded-md">
          <div className="flex space-x-2">
            <img src={starship} className="w-6 h-6" />
            <div>STARSHIP </div>
          </div>
          <div>Value 4</div>
        </div>

        <div className="flex justify-between items-center mt-2 mb-4 p-2 bg-gray-300 rounded-md">
          <div className="flex space-x-2">
            <img src={starship} className="w-6 h-6" />
            <div>STARSHIP </div>
          </div>
          <div>Value 4</div>
        </div>
      </div>
    </section>
  );
};

export default Card;
