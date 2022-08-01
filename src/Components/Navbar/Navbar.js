import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {


    return (
        <React.Fragment >

            <div id="navbar">
                <Link to='home' spy={true} smooth={true} >Home</Link>
                <Link to="skills" spy={true} smooth={true}>Skills</Link>
                <Link to='projects' spy={true} smooth={true} >Projects</Link>
                <Link to='connect' spy={true} smooth={true} >Contact</Link>
                {/* <a className="active" href='#home'>Home</a>
                <a href="#skills"  >Skills</a>
                <a href='#projects' >Projects</a>
                <a href='#connect'  >Contact</a> */}
            </div>
            {/* <div>Menu</div> */}
        </React.Fragment>
    )
}

export default Navbar;