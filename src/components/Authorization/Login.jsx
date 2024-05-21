import { useState } from 'react'
import '../../scss/login.css'

function Login ({ listUsers, setUser }) {
  const [userLogin, setUserLogin] = useState({})

  const handleInput = ev => {
    const id = ev.target.id
    setUserLogin({ ...userLogin, [id]: ev.target.value })
  }

  const handleClick = ev => {
    ev.preventDefault()
    console.log('listusers on login: ', listUsers)
    const findUser = listUsers.find(
      user =>
        user.email === userLogin.email && user.password === userLogin.password
    )
    //Si se encuentra al usuario con esa contraseña se le da a User su valor
    if (findUser) {
      setUser(findUser)
      console.log(findUser.email)
      alert('Bienvenido: ' + findUser.email)
    } else {
      alert('email o contraseña erroneas')
    } /* */
  }

  return (
    <form className='loginContainer' onChange={handleInput}>
      <div className='inputRow'>
        <label htmlFor=''>Email</label>
        <input type='text' id='email' />
      </div>
      <div className='inputRow'>
        <label htmlFor=''>Password</label>
        <input type='password' id='password' />
      </div>
      <div className='hint'>
      <p>email: email 1</p>
      <p>password: 1</p>
      </div>
      <input type='submit' value='inicia sesion' onClick={handleClick} />
    </form>
  )
}

export default Login
