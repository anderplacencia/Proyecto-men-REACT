//Se añaden contenedores de menu según los menus existentes

import { Link, Route, Routes } from 'react-router-dom'
import MenuPlanner from './MenuPlanner'
import '../../scss/menuManager.css'

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
    <div className='menuManagerContainer'>
      <h1 className='menuManagerTitle'>Tus menus semanales</h1>
      <input type='submit' onClick={handleAddClick} value='Añadir nuevo menu'/>
      
      <div>
        {menus.menus.map((item, i) => (
          <div key={i} className='menuContainer' onClick={handleMenuClick}>
          {/* Esto hay que darle una vuelta: necesitamos ir a una ruta a la que le digamos que datos meter: los del menu escogido, quiza se pueda hacer de otra manera mas viable */}
          <Link to="/menuPlanner"><h4 className='menuName'>{item.name}</h4></Link>
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
