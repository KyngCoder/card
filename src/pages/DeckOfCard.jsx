import React from 'react'
import { useLocation } from 'react-router-dom'
import Breadscrum from '../components/Breadscrum'
import Controls from '../components/Controls'



const DeckOfCard = () => {

    const location = useLocation()
    const deckName = location.state.deckName
    

  return (
    <section className=''>
        <Breadscrum state1="Decks" state2={deckName}/>
        <Controls />

        <div className='px-16 mt-4'>
        {/* <DeckOfCard /> */}
        {/* commented code above crashes */}
        </div>
    </section>
  )
}

export default DeckOfCard