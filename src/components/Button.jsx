import React from "react";
import styled from "styled-components";

export default function Button({ text, blue }) {
    return (
        <Div>
            <button className={`${blue ? "blue" : ""}`}>{text}</button>
        </Div>
    );
}

const Div = styled.div`
    button {
        border-radius: 4rem;
        padding: 0.8rem 2rem;
        border: none;
        color: black;
        font-size: 1.1rem;
        cursor: pointer;
        :not(.blue) {
            background-color: grey;
            border: 1px solid white;
        }
        &:hover {
        }
    }
    .blue {
        background-color: #2d69fd;
    }
`;
