import { useState } from 'react';
import NavbarContents from './Navbar-Contents.module.css';
import { useNavigate } from 'react-router-dom';
import { CgMenuGridR } from 'react-icons/cg'
import logo1 from './Google-logo-removebg-preview.png'

export function NavabarContents() {

    const [displayMenu, setDisplayMenu] = useState(false);

    const navigation = useNavigate()

    // to display the navbar while on click of the hamburger

    function handleClickDisplay() {
        setDisplayMenu(!displayMenu)
    }