import React from "react";
import { styled } from "styled-components";
import choose from "../assets/choose.png";
import Button from "./Button";

const Choose = () => {
    return (
        <Section>
            <div className="image">
                <img src={choose} alt="choose" />
            </div>
            <div className="content">
                <h2>Why SHould You Choose Our Website?</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci possimus iure ex quia saepe veniam facere obcaecati
                    earum, delectus recusandae! Eius officiis vel adipisci atque
                    suscipit amet impedit eveniet quam! .
                </p>
                <Button text="Read More" blue />
            </div>
        </Section>
    );
};

export default Choose;

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin: 0 9rem;
    margin-bottom: 5rem;
    .content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 3rem;
        h2 {
            font-size: 4rem;
        }
        p {
            color: #7b7e86;
            line-height: 2rem;
        }
    }
`;
