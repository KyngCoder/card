import React, { useEffect, useState } from "react";
import add from "../assets/icons/add.svg";
import factionWater from "../assets/icons/factionWater.svg";
import factionJedi from "../assets/icons/factionJedi.svg";
import rebelWater from "../assets/icons/rebelAllianceWatermark.svg";
import noFactionWater from "../assets/icons/noFactionWater.svg";
import water from "../assets/icons/watermark.svg";
import deck from "../assets/icons/deck.svg";
import remove from "../assets/icons/remove.svg";

const Decks = () => {
  const [showModal, setShowModal] = useState(false);
  const [icon, setIcon] = useState(" ");
  const [cardName, setCardName] = useState(" ");

  const [allCards, setAllCards] = useState([])

  
  useEffect(() => {
    // Fetch data from local storage
    const storedCards = localStorage.getItem('cards');
    if (storedCards) {
      setAllCards(JSON.parse(storedCards));
    }
  }, []);


  const createCard = (e) => {
    e.preventDefault();
    console.log(icon, cardName);

    const newCard = {
        icon: icon,
        cardName: cardName
      };

      // Store the new card object in localstorage
  const existingCards = JSON.parse(localStorage.getItem('cards')) || [];
  existingCards.push(newCard);
  localStorage.setItem('cards', JSON.stringify(existingCards));

    // Update the allCards state to include the new card object
    setAllCards(prevCards => [...prevCards, newCard]);

    // Clear the input fields
    setIcon('');
    setCardName('');

  };

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  console.log(allCards)

  return (
    <section className="px-16 my-2">
      <div className="flex px-16 my-4 justify-between">
        <p>
          No Decks Created. Please create a Deck by pressing the Add Deck +
          button above.
        </p>

        <div className="relative">
          <div className="p-2 bg-white rounded-sm" onClick={handleButtonClick}>
            <img src={add} className="w-5" />
          </div>

          <div
            id="authentication-modal"
            tabindex="-1"
            aria-hidden="true"
            className={`${
              showModal ? "flex" : "hidden"
            } fixed top-30 -0 right-10 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
          >
            <div class="relative w-full max-w-md max-h-full">
              <div class="relative bg-white rounded-lg shadow ">
                <button
                  onClick={closeModal}
                  type="button"
                  class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Close modal</span>
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
                      <img className="w-8 p-1  bg-gray-500" src={rebelWater} />
                    </div>
                    <div
                      onClick={() => setIcon(factionJedi)}
                      className=" border-1 border-gray-300"
                    >
                      <img className="rounded-sm w-8 p-1 " src={factionJedi} />
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
<div className="grid grid-cols-5 gap-x-2 space-x-2">
     {
        allCards.map((card, index) => {
            return(
                <div className="">
                <div className="bg-gray-800 relative rounded-b-0 rounded-t-md h-32 ">
                  <div className="flex justify-end overflow-hidden">
                    <img src={water} className="-mt-4 w-40 -mr-3 " />
                  </div>
                  <div className="absolute top-4 left-4">
                    <img className="w-6 " src={deck} />
                  </div>
        
                  <div className="absolute top-6 right-6 bg-gray-900 p-2">
                    <img className="w-4 " src={remove} />
                  </div>
                  <h2 className="absolute bottom-4 left-4 text-3xl text-white font-semibold">
                    Name
                  </h2>
                </div>
                <div className="bg-white h-full rounded-t-0 rounded-b-md flex justify-between px-6">
                  <p className="text-6xl pt-2 pb-4">8</p>
        
                  <p className="pt-4 text-gray-500">total cards</p>
                </div>
              </div>
            )
        })
     }
     </div>
    </section>
  );
};

export default Decks;
