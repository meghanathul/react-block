import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
const Navebar = () => {
    return (
        <div>
            <header>
                <div className='navbar'>
                    <ul>
                        <li >
                            <Link to='./home' className='nav-link'>Home</Link>

                        </li>

                        <li>
                            <Link to='./Tourism' className='nav-link'>Tourism</Link>

                        </li>

                        <li>
                            <Link to='./Fitness' className='nav-link'>Fitness</Link>

                        </li>

                        <li>
                            <Link to='./Technology' className='nav-link'> Technology</Link>

                        </li>

                        <li>
                            <Link to='./Bollywood' className='nav-link'> Bollywood</Link>

                        </li>

                        <li>
                            <Link to='./Food' className='nav-link'>Food</Link>

                        </li>
                    </ul>
                </div>
                <hr />
            </header>
        </div>
    )
}

export default Navebar