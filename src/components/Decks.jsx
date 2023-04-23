import React from 'react'
import deck from "../assets/icons/deck.svg";
import remove from "../assets/icons/remove.svg";
import { useNavigate } from 'react-router-dom';

const Decks = ({card, deleteCard, index, imageClassName}) => {



    const navigate = useNavigate();


    const viewDeck = (deckName) => {
    
        navigate("/deck/details", {
          state: { deckName: deckName },
        });
      };

  return (
    <div
    key={index}
   
    className="h-28 cursor-pointer active:scale-95 transition duration-500"
  >
    <div
      className={`${imageClassName}  relative rounded-b-0 rounded-t-md h-32  `}
    >
      <div className="flex justify-end overflow-hidden">
        <img src={card.icon} className="-mt-4 w-40 -mr-3 " />
      </div>
      <div className="absolute top-4 left-4">
        <img className="w-6 " src={deck} />
      </div>

      <div
        onClick={() => deleteCard(index)}
        className="absolute top-6 right-6 bg-gray-900 p-2"
      >
        <img className="w-4 " src={remove} />
      </div>
      <h2 className="absolute bottom-4 left-4 text-3xl text-white font-semibold">
        {card.cardName}
      </h2>
    </div>
    <div  onClick={() => viewDeck(card.cardName)} className="bg-white h-full rounded-t-0 rounded-b-md flex justify-between px-6">
      <p className="text-6xl pt-2 pb-4">8</p>

      <p className="pt-4 text-gray-500">total cards</p>
    </div>
  </div>
  )
}

export default Decks