import React from 'react'

const Controls = () => {
  return (
    <section className="flex space-x-5 px-16">
       
        
<div className="relative w-2/4 text-gray-600">
  <input type="search" name="serch" placeholder="Search" className="bg-white w-full h-10 px-5 pr-10 rounded-md text-sm focus:outline-none" />
  <button type="submit" className="absolute svg-icon right-0 top-0 mt-3 mr-4">
    <svg className="h-4 w-4 fillCurrent" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" >
      <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
    </svg>
  </button>
</div>
       

        <div className='bg-white border-gray-600 border-2 rounded-sm text-lg px-4 py-1'>
            <p>A to Z</p>
        </div>

        <div className='bg-gray-300 rounded-sm text-lg px-4 py-1'>
            <p>A to Z</p>
        </div>

        <div className='bg-gray-300 rounded-sm text-lg px-4 py-1'>
            <p>A to Z</p>
        </div>

    </section>
  )
}

export default Controls