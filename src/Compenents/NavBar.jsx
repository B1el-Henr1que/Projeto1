import { Link } from "react-router-dom"
import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link><br/>
            <Link to="Aparelhos">Aparelhos</Link>
            
            
        </nav>
    )
}

export default Navbar
