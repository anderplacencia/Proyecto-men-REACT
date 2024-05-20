import {Navigate} from "react-router-dom"

function AuthRoute ({ user, component }) {
  //user --> null cuando no hay login

  //si user === null --> nos manda al login
  if (!user) {
       alert("Necesita hacer login")
    return <Navigate to='/login' />

  }
  //Si hay usuario nos manda al componente 'PROP'orcionado
  if (user) {
    return component
  }
}

export default AuthRoute
