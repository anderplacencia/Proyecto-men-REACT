import React from 'react'
import FoodById from '../Food/FoodById'

const MenuPlanner = (menu, foods) => {
  return (
    <div>
      <section>
        Lunes:
        <p>Desayuno:</p>
        <FoodById id={menu.weekPlan.lunes[0]} foodsList={foods} />
        <p>Comida:</p>
        <FoodById id={menu.weekPlan.lunes[1]} foodsList={foods} />
        <p>Cena:</p>
        <FoodById id={menu.weekPlan.lunes[2]} foodsList={foods} />
      </section>

      <section>
        martes:
        <p>Desayuno:</p>
        <FoodById id={menu.weekPlan.martes[0]} foodsList={foods} />
        <p>Comida:</p>
        <FoodById id={menu.weekPlan.martes[1]} foodsList={foods} />
        <p>Cena:</p>
        <FoodById id={menu.weekPlan.martes[2]} foodsList={foods} />
      </section>
    </div>
  )
}

export default MenuPlanner
