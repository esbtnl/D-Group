import React from 'react'
import WoFGrid from '../components/WoFGrid'
import dart from '../res/dart_slide.jpg'
import '../css/WoF.css'

function WoF() {
    return (
        <>
            <div className="container">
                <img src={dart} alt="Dart" style={{height:"40vh", width:"100%"}}/>
                <h1 className="centered">Wall Of Fame</h1>
            </div>
            <WoFGrid></WoFGrid>
        </>
    )
}
export default WoF
