import { Link } from "react-router-dom"
import "../scss/navBar.css"

const NavBar = () => {
  return (
    <header className="navBarContainer">
        <ul className="navBarUl">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/menuManager">Menu</Link></li>
            
            <li><Link to="/foodSearch">Comidas</Link></li>
        </ul>
    </header>
  )
}

export default NavBar
