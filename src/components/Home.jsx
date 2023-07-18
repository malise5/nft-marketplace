import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import hero from "../assets/hero.png";
import heroText from "../assets/heroText.png";
import Button from "./Button";

const Home = () => {
    return (
        <Section>
            <NavBar />
            <div className="ellipse"></div>
            <div className="container">
                <div className="content">
                    <h1>
                        Explore Our
                        <span>
                            <img src={heroText} alt="hero text" />
                        </span>
                        Hero Text Digital NFT Market Place
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Libero explicabo quas provident quo voluptatum
                        dolore odio neque,
                    </p>
                    <div className="buttons">
                        <Button blue text="Explore Now" />
                        <Button text="Create NFT" />
                    </div>
                    <div className="data">
                        <div className="dataTab">
                            <h2>40K</h2>
                            <h5>Artwork</h5>
                        </div>

                        <div className="dataTab">
                            <h2>12K</h2>
                            <h5>Auction</h5>
                        </div>

                        <div className="dataTab">
                            <h2>20K</h2>
                            <h5>Artist</h5>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <img src={hero} alt="hero" />
                </div>
            </div>
        </Section>
    );
};

export default Home;

const Section = styled.section`
    margin: 0.5rem;
    width: 100%;
    background-color: #232835;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    margin-bottom: 5rem;
    .elilipse {
        height: 30rem;
        width: 30rem;
        background-color: #ae54c27d;
        opacity: 0.5;
        border-radius: 100%;
        filter: blur(2000px);
        position: absolute;
        bottom: -30%;
        left: -10%;
        z-index: 1;
    }
    .container {
        padding: 2rem;
        margin: 0 2rem;
        display: flex;
        .content {
            z-index: 10;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            margin-top: 5rem;
            padding-right: 2rem;
            h1 {
                color: white;
                font-size: 3rem;
            }
            p {
                color: #a6a6a6;
            }
            .buttons {
                display: flex;
                gap: 2rem;
            }
            .data {
                display: flex;
                gap: 5rem;
            }
            .dataTab {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                h2 {
                    color: white;
                    font-size: 2rem;
                }
                h5 {
                    text-align: center;
                    color: #a6a6a6;
                }
            }
        }
        .image {
            img {
                height: 40rem;
            }
        }
    }
`;
