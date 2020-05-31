import React from 'react';

const Img = (props) => (
    <img src={`${props.photo}.${props.ext}`} alt="Personaje"/>
)

export default Img;