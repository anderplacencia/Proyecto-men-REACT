import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/profile">Menu semanal</Link></li>
        </ul>
    </header>
  )
}

export default NavBar
