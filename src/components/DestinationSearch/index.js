import React from 'react'
import './index.css'

const DestinationSearch = props => {
  const {destinationsitems} = props
  const {name, imgUrl, id} = destinationsitems

  return (
    <li>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}
export default DestinationSearch
