import React from "react";
import logo from '../pages/foodsto-logo-1-4.png';
import Image from 'next/image';


export default (
    function Header(props){
        return(
            <header className="flex flex-row justify-between p-6">
                <div>
                <Image src={logo} alt='logo' />
                </div>
                <nav>
                    <ul className="flex flex-row">
                        <li className="mr-14">
                            <a href="#">Home</a>
                        </li>
                        <li className="mr-14">
                            <a href="#">Products</a>
                        </li>
                        <li className="mr-14">
                            <a href="#">About Us</a>
                        </li>
                        <li className="mr-14">
                            <a href="https://foodsto-api.herokuapp.com/admin/">Admin Login</a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
)
