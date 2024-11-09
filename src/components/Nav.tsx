import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='nav'>
            <NavLink className="nav__item" to="/">HomePage</NavLink>
            <NavLink className="nav__item" to="/movies/list">Movies</NavLink>
            <NavLink className="nav__item" to="/about">About us</NavLink>
        </nav>
    )
}

export default Nav