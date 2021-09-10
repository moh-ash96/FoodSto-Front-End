import React from "react";
import logo from '../pages/foodsto-logo-1-4.png';
import Image from 'next/image';


export default (
    function Header(props){
        return(
            <header>
                <Image src={logo} alt='logo' />
            </header>
        )
    }
)
