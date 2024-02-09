import { NavLink } from 'react-router-dom';
import '../App.css'
const Header = () => {
    return (<>
        <header className='header'>
            <h1 >Logo</h1>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => 
                            ` ${isActive ? "active" : ""}`
                        }
                    >
                        Home
                    </NavLink>
                </li>

 
                <li>
                    <NavLink
                        to='/about'

                        className={(isActive) =>

                            `${isActive ? 'active' : null}`
                        }>About</NavLink>
                </li>
                <li>
                    <NavLink
                        to='/contact'
                        className={(isActive) =>

                            `${isActive ? 'active' : null}`
                        }>Contact</NavLink>
                </li>
                <li>
                    <NavLink
                        to='/githubusers'

                        className={(isActive) =>

                            `${isActive ? 'active' : null}`
                        }>Github Users</NavLink>
                </li>
            </ul>

            <div className="login-signup">
                <button className='login'>Login</button>
                <button className='signup'>Sign Up</button>
            </div>
        </header>
    </>)
}

export default Header;