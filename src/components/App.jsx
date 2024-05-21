import { useEffect, useState } from 'react'
import getDataApi from './Services/Api'
import getUsersApi from './Services/ApiUsers'
import AuthRoute from './Authorization/AuthRoute'
import { Route, Routes } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import Login from './Authorization/Login'
import MenuManager from './MenuManager/MenuManager'
import getMenuApi from './Services/ApiMenu'
import SearchName from './SearchName/SearchName'

function App () {
  const [foods, setFoods] = useState([])
  //Usuario autenticado tras hacer login (si no es null)
  const [user, setUser] = useState(null)
  //Lista de usuarios registrados
  const [listUsers, setListUsers] = useState([])
  //listado de menus
  const [menus, setMenus] = useState([])

  //Se obtienen los datos de las comidas una vez en --> foods
  useEffect(() => {
    getDataApi().then(cleanData => {
      setFoods(cleanData)
    })
  }, [])

  //Se obtienen los datos de los usuarios una vez en --> listUsers
  useEffect(() => {
    getUsersApi().then(cleanListUsers => {
      setListUsers(cleanListUsers)
    })
  }, [])

  //Se obtienen los datos de los menus
  useEffect(() => {
    getMenuApi().then(cleanMenus => {
      setMenus(cleanMenus)
    })
  }, [])

  return (
    <div>
      {/* Navigation bar*/}
      <NavBar />

      {/* Componentes a mostrar */}
      <Routes>
        {/* Home */}
        <Route path='/' element={<Home/>} />
        {/* Login */}
        <Route
          path='/login'
          element={<Login listUsers={listUsers} setUser={setUser} />}
        />
        {/* Para entrar en la seccion de menu se necesita autenticacion */}
        <Route
          path='/menuManager'
          element={
            <AuthRoute user={user} component={<MenuManager menus={menus} foods={foods}/>} />
          }
        />
        <Route
          path='/foodSearch'
          element={
            <AuthRoute user={user} component={<SearchName foods={foods}/>} />
          }
        />
      </Routes>
    </div>
  )
}

export default App
