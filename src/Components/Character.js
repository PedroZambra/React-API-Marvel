import React from 'react';

const Character = (props) =>(
            <div className="hero">
                <a href={props.shop} target="_blank" title="Web">
                    <h2>{props.name}</h2>
                    {/* {console.log(props.photo)}  */}
                    <img src={`${props.photo}.${props.ext}`} alt="Personaje"/>
                </a>
            </div>
)

export default Character;