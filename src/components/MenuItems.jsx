import React from 'react'
import card from '../assets/icons/card.svg'
import deck from '../assets/icons/deck.svg'

const MenuItems = () => {
  return (
    <div>
    <section className='flex justify-between px-16 pt-8'>
       <div className='flex items-center space-x-5'>
       <div className='flex items-center space-x-2 bg-white px-2 py-1 rounded-md'>
            <img src={card} />
            <p>All Cards</p>
        </div>

        <div className='flex items-center space-x-2 bg-white px-2 py-1 rounded-md'>
            <img src={deck} />
            <p>Decks</p>
        </div>
       </div>

        <div className='flex'>
            
            <p>SW-API Deck Builder</p>
        </div>

        <div className='flex'>
          
            <p>Bavin Edwards</p>
        </div>

    </section>
    <hr className="mx-16 mt-2 mb-4 text-gray-600" />
    </div>
  )
}

export default MenuItems