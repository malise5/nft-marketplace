import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";

const Home = () => {
    return (
        <Section>
            <NavBar />
        </Section>
    );
};

export default Home;

const Section = styled.section`
    margin: 0.5rem;
    width: 100%;
    height: 100vh;
    background-color: #232835;
    border-radius: 1rem;
`;
