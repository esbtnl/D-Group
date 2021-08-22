import styled from "styled-components";
import { NavLink as Link } from "react-router-dom"
import {FaBars} from "react-icons/fa"

export const Nav = styled.nav`
    background: #964B00;
    height: 125px;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0.5rem calc((100vw - 1000px)/2);
    z-index: 10;
    @media screen and (min-width: 768px){
        position: fixed;
        background-color: transparent;        
    }
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 0.5rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.1rem;
    white-space: nowrap;

    &.active {
        color: #00F;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 20px;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`
