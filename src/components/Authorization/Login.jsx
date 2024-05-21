import { useState } from 'react'

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
    <form onChange={handleInput}>
      <label htmlFor=''>Email</label>
      <input type='text' id='email' />

      <label htmlFor=''>Password</label>
      <input type='password' id='password' />

<p>email:    email 1</p>
<p>password:    1</p>
      <input type='submit' value='inicia sesion' onClick={handleClick} />
    </form>
  )
}

export default Login
