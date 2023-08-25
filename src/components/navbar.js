import React from 'react'

const Navbar = ({ filterItem , menuList }) => {
  return (
    <>
       <nav className='fixed py-3 bg-teal-900 z-10'>
        <div className='w-screen flex justify-center'>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-1 px-3 border border-teal-600 rounded mx-2"> All </button>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-1 px-3 border border-teal-600 rounded mx-2" onClick={() => filterItem("Breakfast")}> Breakfast </button>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-1 px-3 border border-teal-600 rounded mx-2" onClick={() => filterItem("Lunch")}> Lunch </button>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-1 px-3 border border-teal-600 rounded mx-2" onClick={() => filterItem("Dinner")}> Dinner </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar