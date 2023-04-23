import React, { useState } from "react";
import factionJedi from "../assets/icons/factionJedi.svg";
import rebelWater from "../assets/icons/rebelAllianceWatermark.svg";
import noFactionWater from "../assets/icons/noFactionWater.svg";
import water from "../assets/icons/watermark.svg";
import add from "../assets/icons/add.svg";

const Modal = ({createCard, cardName, icon, setIcon, setCardName}) => {
  const [showModal, setShowModal] = useState(false);


  const closeModal = () => {
    setShowModal(false);
  };

  const handleButtonClick = () => {
    setShowModal(true);
  };

  return (
    <div className="relative">
      <div className="p-2 bg-white rounded-sm" onClick={handleButtonClick}>
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
              <div className="flex  items-center space-x-2">
                <div  onClick={() => setIcon(rebelWater)} className="active:scale-95 transition duration-500 cursor-pointer ">
                  <img className="rounded-sm w-8 p-1  bg-gray-500" src={rebelWater} />
                </div>
                <div
                  onClick={() => setIcon(factionJedi)}
                  className=" active:scale-95 transition duration-500 cursor-pointer "
                >
                  <img className="rounded-sm w-8 p-1 border border-gray-400" src={factionJedi} />
                </div>
                <div className=" active:scale-95 transition duration-500 cursor-pointer" onClick={() => setIcon(water)}>
                  <img
                    className="rounded-sm w-8 p-1  bg-gray-500"
                    src={water}
                  />
                </div>
                <div className=" active:scale-95 transition duration-500 cursor-pointer" onClick={() => setIcon(noFactionWater)}>
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
  );
};

export default Modal;
