import React from 'react';
import styled from 'styled-components';

const Black = styled.button`
    background: black;
    width:40px;
    height: 130px;
    position: absolute;
    margin: 1px;
    margin-left: -20px;

    :active {
        backgroung: #333;
    }
`;

const White = styled.button`
background: white;
width:60px;
height: 200px;
margin: 1px;
border: 1px solid black;
box-shadow: 2px 5px;

:active {
    backgroung: #EEE;
}   
`;

type Props = {
    color: string;
    note: string;
}

const Note: React.FC<Props> = ({color, note}) => (
    color === 'white' ? (
        <White value={note} />
    ) : (
        <Black value={note} />
    )
);

export default Note;