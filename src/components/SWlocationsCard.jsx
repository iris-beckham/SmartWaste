import React from 'react'

function SWlocationsCard(
    name,
    address,
    city,
    type,
    zip
) {
  return (
    <div>
      <div>Name: {name}</div>
      <div>City: {address}</div>
      <div>Address: {city}</div>
      <div>Type: {type}</div>
      <div>zip: {zip}</div> 
    </div>
  )
}

export default SWlocationsCard