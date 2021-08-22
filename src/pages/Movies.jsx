import React from 'react'

import dart from '../res/dart_slide.jpg'


function Movies() {
    return (
        <>
            <div className="container">
                <img src={dart} alt="Dart" style={{height:"40vh", width:"100%"}}/>
                <h1 className="centered">Taggfilmer</h1>
            </div>
        </>
    )
}
export default Movies
