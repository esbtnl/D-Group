import React from 'react'
import { 
    Nav, 
    NavLink, 
    Bars, 
    NavMenu
} from "./NavbarElements"
import gustaf from "../../res/D-group.png"

function Navbar({toggle}) {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={gustaf} alt="logo" style={{height: "100px"}}></img>
                </NavLink>
                <Bars onClick={toggle}/>
                <NavMenu>
                    <NavLink to="/groupies" activeStyle>
                        D-Group 21/22
                    </NavLink>
                    <NavLink to="/WallOfFame" activeStyle>
                        Wall Of Fame
                    </NavLink>
                    <NavLink to="/taggfilmer" activeStyle>
                        Taggfilmer
                    </NavLink>
                    <NavLink to="/calender" activeStyle>
                        Festkalender
                    </NavLink>
                    <NavLink to="/events" activeStyle>
                        Evenemang
                    </NavLink>
                    <NavLink to="/domd" activeStyle>
                        DÖMD
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar
