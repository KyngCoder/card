import React from 'react'
import card from '../assets/icons/card.svg'
import deck from '../assets/icons/deck.svg'
import { NavLink, useNavigate } from 'react-router-dom'

const MenuItems = () => {

  const navigate = useNavigate()

  return (
    <div>
    <section className='flex justify-between px-16 pt-8'>
       <div className='flex items-center space-x-2'>
     <NavLink to="/" >
     <div className='flex cursor-pointer items-center space-x-2 bg-white px-2 py-1 rounded-md'>
            <img src={card} />
            <p>All Cards</p>
        </div>
     </NavLink>

        <div onClick={()=>navigate("/decks")} className='flex items-center cursor-pointer space-x-2 bg-white px-2 py-1 rounded-md'>
            <img src={deck} />
            <p>Decks</p>
        </div>
       </div>

        <div className='hidden xl:flex'>
            
            <p>SW-API Deck Builder</p>
        </div>

        <div className='flex border-2 border-gray-500 px-2 py-1 rounded-md'>
          
            <p>Bavin Edwards</p>
        </div>

    </section>
    <hr className="mx-16 mt-2 mb-4 bg-gray-800" />
    </div>
  )
}

export default MenuItems