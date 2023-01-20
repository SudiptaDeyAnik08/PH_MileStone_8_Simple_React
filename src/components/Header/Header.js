import React  from "react";
import './Header.css'
const Header = () =>{

    return(
        <div>
            <nav className="Menu">
                <a href="/Home"> Home</a>
                <a href="/Shope">Shope</a>
                <a href="/About">About</a>
            </nav>
        </div>
    )
}

export default Header;