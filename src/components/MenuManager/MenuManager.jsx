//Se añaden contenedores de menu según los menus existentes

import { Route, Routes } from 'react-router-dom'
import MenuPlanner from './MenuPlanner'
import Home from '../Home'

//Configurar menu como un elemento del user, cada user guarda sus menus <----------------------------------
const MenuManager = (menus, foods) => {
  console.log('menu en menu manager: ', menus)
  const handleAddClick = ev => {
    ev.preventDefault()
    //pasar a ventana de week menu planner, asignando un id al weekmenu
  }

  const handleMenuClick = () => {
    //abrir week menu planner del seleccionado

    //No funciona el routes aqui  <---------------------------------COMO HACER??
    <Routes>
      <Route path='/' element={<MenuPlanner menu={menus} foods={foods} />} />
    </Routes>
  }

  const handleEditClick = () => {
    //cambiar nombre
  }

  const handleDeleteClick = () => {
    //eliminar menu, pedir confirmacion
  }

  return (
    <div>
      <h1>Tus menus semanales</h1>
      <input type='submit' onClick={handleAddClick} />
      Añadir nuevo menu
      <div>
        {menus.menus.map((item, i) => (
          <div key={i} className='menuContainer' onClick={handleMenuClick}>
            <h4>{item.name}</h4>
            <small>{item.id}</small>
            <div onClick={handleEditClick}>Edit</div>
            <div onClick={handleDeleteClick}>Delete</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuManager