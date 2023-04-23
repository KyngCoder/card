import React, { useContext, useEffect, useRef, useState } from "react";
import add from "../assets/icons/add.svg";
import factionJedi from "../assets/icons/factionJedi.svg";
import rebelWater from "../assets/icons/rebelAllianceWatermark.svg";
import noFactionWater from "../assets/icons/noFactionWater.svg";
import water from "../assets/icons/watermark.svg";
import deck from "../assets/icons/deck.svg";
import remove from "../assets/icons/remove.svg";
import Breadscrum from "../components/Breadscrum";
import { FilterContext } from '../context/Filter';
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Decks = () => {
  const [showModal, setShowModal] = useState(false);
  const [icon, setIcon] = useState(" ");
  const [cardName, setCardName] = useState(" ");

  const [allCards, setAllCards] = useState([]);

  const navigate = useNavigate()

  const getImageClassName = (imageName) => {
    switch (imageName) {
      case "/src/assets/icons/watermark.svg":
        return "bg-gray-900";
      case "/src/assets/icons/rebelAllianceWatermark.svg":
        return "bg-red-600";
      case "/src/assets/icons/noFactionWater.svg":
        return "bg-red-200";
      case "/src/assets/icons/factionJedi.svg":
        return "bg-green-600";
      default:
    }
  };

  const deleteCard = (index) => {
    const updatedCards = [...allCards];
    updatedCards.splice(index, 1);
    setAllCards(updatedCards);
    localStorage.setItem("cards", JSON.stringify(updatedCards));
    toast("card was succesfully deleted")
  };

  useEffect(() => {
    // Fetch data from local storage
    const storedCards = localStorage.getItem("cards");
    if (storedCards) {
      setAllCards(JSON.parse(storedCards));
    }
  }, []);

  const createCard = (e) => {
    e.preventDefault();
    console.log(icon, cardName);

    if (!icon || !cardName) return;

    const newCard = {
      icon: icon,
      cardName: cardName,
    };

    // Store the new card object in localstorage
    const existingCards = JSON.parse(localStorage.getItem("cards")) || [];
    existingCards.push(newCard);
    localStorage.setItem("cards", JSON.stringify(existingCards));

    // Update the allCards state to include the new card object
    setAllCards((prevCards) => [...prevCards, newCard]);

    // Clear the input fields
    setIcon("");
    setCardName("");
  };

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  
  const [searchTerm, setSearchTerm] = useState("")
  const timerRef = useRef(null);
  const { filter, updateFilter,getSearchTerm, updateClicked, clicked } = useContext(FilterContext);



  const handleFocus = () => {
    updateClicked(true)
  }
 

  const handleBlur = () => {
    timerRef.current = setTimeout(() => {
      updateClicked(false)
    }, 500); // wait for half a second before setting focus to false
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value)
    getSearchTerm(searchTerm)
    clearTimeout(timerRef.current); // clear the timeout on every change
  };

  const viewDeck = (deckName) => {
    navigate("/deck/details", {
        state:{deckName:deckName}
    })
  }


  return (
    <>
    <Breadscrum state1="Decks" state2="Select deck" />
    
<div className=" flex items-center space-x-2 xl:justify-between px-16">
    <div className="relative w-[450px] md:w-[820px] xl:w-[500px] text-gray-600 ">
        <input onFocus={handleFocus} onBlur = {handleBlur} value={searchTerm} onChange= {handleChange} type="search" name="serchTerm" placeholder="Search" className="bg-white w-full h-10 px-1 md:px-5 pr-10 rounded-md text-sm focus:outline-none" />
        <button type="submit" className="absolute svg-icon right-0 top-0 mt-3 mr-4">
          <svg className="h-4 w-4 fillCurrent" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
          </svg>
        </button>

       
      </div>

      <div className="relative">
            <div
              className="p-2 bg-white rounded-sm"
              onClick={handleButtonClick}
            >
              <img src={add} className="w-5" />
            </div>

            <div
            
              tabIndex="-1"
              aria-hidden="true"
              className={`${
                showModal ? "flex" : "hidden"
              } absolute -right-8 mt-2 z-20 w-96`}
            >
              <div className="relative w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow ">
                  <button
                    onClick={closeModal}
                    type="button"
                    className="absolute top-0 right-0 bg-transparent hover:bg-black  rounded-lg  p-1   "
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="red"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                
                  </button>
                  <div class="px-6 flex  justify-between py-6 lg:px-8 flex">
                    <div className="">
                      <p>Faction</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div
                        onClick={() => setIcon(rebelWater)}
                        className="bg-red-900"
                      >
                        <img
                          className="w-8 p-1  bg-gray-500"
                          src={rebelWater}
                        />
                      </div>
                      <div
                        onClick={() => setIcon(factionJedi)}
                        className=" border-1 border-gray-300"
                      >
                        <img
                          className="rounded-sm w-8 p-1 "
                          src={factionJedi}
                        />
                      </div>
                      <div onClick={() => setIcon(water)}>
                        <img
                          className="rounded-sm w-8 p-1  bg-gray-500"
                          src={water}
                        />
                      </div>
                      <div onClick={() => setIcon(noFactionWater)}>
                        <img
                          className="rounded-sm w-8 p-1  bg-gray-500"
                          src={noFactionWater}
                        />
                      </div>
                    </div>
                  </div>
                  <form onSubmit={createCard} className=" px-8">
                    <label
                      htmlFor="deckName"
                      className="block font-medium text-gray-700 "
                    >
                      Deck Name
                    </label>
                    <input
                      id="deckName"
                      name="deckName"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      type="text"
                      placeholder="Name of Deck"
                      className="border-b-2 border-gray-400 py-2 mb-2 rounded-sm w-full focus:outline-none focus:border-blue-500"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>


      </div>


      <section className="px-16 my-2 mb-4 h-full">
        <div className="flex px-16 my-4 justify-between">
          <p className={`${allCards.length > 0 ? "hidden" : "flex"}`}>
            No Decks Created. Please create a Deck by pressing the Add Deck +
            button above.
          </p>

         
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen xl:grid-cols-5 lg:grid-cols-4 gap-2 space-x-2 space-y-12 md:space-y-0 ">
          {allCards.map((card, index) => {
         
            const imageClassName = getImageClassName(card.icon);

            return (
              <div key={index} onClick={()=>viewDeck(card.cardName)} className="h-28 cursor-pointer active:scale-95 transition duration-500">
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
                <div className="bg-white h-full rounded-t-0 rounded-b-md flex justify-between px-6">
                  <p className="text-6xl pt-2 pb-4">8</p>

                  <p className="pt-4 text-gray-500">total cards</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Decks;
