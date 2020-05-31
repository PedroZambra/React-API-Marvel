import React, {lazy, Suspense} from 'react';

const Img = lazy(() => import("./Img.js"));

const Character = (props) => (
    <div className="hero" key={props.id}>
        <a href={props.urls[0].url} target="_blank" rel="noopener noreferrer" title="Web">
            <h2>{props.name}</h2>
            <Suspense fallback={<span>Loading...</span>}>
                <Img photo={props.thumbnail.path} ext={props.thumbnail.extension}/>
            </Suspense>
        </a>
    </div>
)

export default Character;