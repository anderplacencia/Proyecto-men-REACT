import React from 'react'

const FoodById = (id, foodsList) => {
  return (
    <article>
        <img src={foodsList[id].image} alt=""/>
        <h3>{foodsList[id].name}</h3>
        <p>{foodsList[id].classification}</p>
        <p>{foodsList[id].description}</p>
    </article>
  )
}

export default FoodById
