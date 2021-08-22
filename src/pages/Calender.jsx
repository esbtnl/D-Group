import React from 'react'
import dart from '../res/dart_slide.jpg'

function Calender() {
    return (
        <>
            <div className="container">
                <img src={dart} alt="Dart" style={{height:"40vh", width:"100%"}}/>
                <h1 className="centered">Festkalender</h1>
            </div>
            <iframe src="https://calendar.google.com/calendar/embed?src=3mbkkinsm8u21ed86bu5vticc0%40group.calendar.google.com&ctz=Europe%2FStockholm" width="100%" height="600" frameborder="0" scrolling="auto" allowtransparency="true" title="FestKalender"></iframe>

        </>
    )
}
export default Calender
