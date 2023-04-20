import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../app/store'

const Navbar = () => {
    const isLoggedIn = useSelector((state) => !!state.auth.me.id)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutAndRedirectHome = () => {
        dispatch(logout())
        navigate('/login')
    }

    return (
        <div>
            <nav class="navbar">
                {isLoggedIn ? (
                    <div class="navbar-container">
                        <Link to="/home">
                            <img src="gracebuster-logo.png" class="logo" />
                        </Link>
                        <Link to="/shop">
                            Shop <i class="fa-solid fa-cassette-tape"></i>
                        </Link>
                        <Link to="/account">Account</Link>
                        <button type="button" onClick={logoutAndRedirectHome}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <div class="navbar-container">
                        <Link to="/home">
                            <img src="gracebuster-logo.png" class="logo" />
                        </Link>
                        <div class="nav-right">
                            <Link to="/shop">Shop</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign Up</Link>
                            <Link to="/cart">
                                <i class="fa-solid fa-cart-shopping"></i>
                                Cart
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
            <hr />
        </div>
    )
}

export default Navbar
