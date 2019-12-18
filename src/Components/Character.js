import React, {lazy, Suspense} from 'react';

const Img = lazy(() => import("./Img.js"));

const Character = (props) =>(
            <div className="hero">
                <a href={props.shop} target="_blank" rel="noopener noreferrer" title="Web">
                    <h2>{props.name}</h2>
                    <Suspense fallback={<span>Loading...</span>}>
                        <Img photo={props.photo} ext={props.ext}/>
                    </Suspense>
                </a>
            </div>
)

export default Character;