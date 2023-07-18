import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import Button from "./Button";

const NavBar = () => {
    return (
        <Nav>
            <div className="brand">
                <img src={logo} alt="logo" />
            </div>
            <div className="toggle"></div>
            <div className="links">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Marketplace</a>
                    </li>
                    <li>
                        <a href="#">Sellers</a>
                    </li>
                    <li>
                        <a href="#">Create</a>
                    </li>
                </ul>
            </div>
            <Button text="Contact" />
        </Nav>
    );
};

export default NavBar;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 2rem;
    .toggle {
        display: none;
    }
    .links {
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
        padding: 3em 8rem;
    }
    ul {
        display: flex;
        list-style-type: none;
        gap: 3rem;
        li {
            a {
                color: #002000;
                text-decoration: none;
                transition: 0.4s ease-in-out;
                &:hover {
                    color: #2d69fd;
                }
            }
        }
    }
`;
