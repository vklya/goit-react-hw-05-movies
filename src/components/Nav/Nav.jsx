import { NavLink } from "react-router-dom"

const Nav = () => (
    <header>
        <nav>
            <NavLink to='/' end>Home</NavLink>
            <NavLink to='/movies'>Movies</NavLink>
        </nav>
    </header>
)

export default Nav;