import React from 'react'

function SWlocationsCard({ loc }) {
    const {
        name,
        city,
        address,
        type,
        zip
    } = loc

  return (
    <div className="bg-orange-500 mx-5 rounded-lg px-5 py-7 hover:scale-105 transition-transform duration-300">
      <div>Name: {name}</div>
      <div>City: {address}</div>
      <div>Address: {city}</div>
      <div>Type: {type}</div>
      <div>zip: {zip}</div> 
    </div>
  )
}

export default SWlocationsCard