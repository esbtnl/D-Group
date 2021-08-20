import React from 'react'
import dart from '../res/dart_slide.jpg'
import '../css/global.css'
import GroupieGrid from '../components/GroupieGrid'


function Groupies() {
    return (
        <>
            <div className="container">
                <img src={dart} alt="Dart" style={{height:"40vh", width:"100%"}}/>
                <h1 className="centered">D-Group 21/22</h1>
            </div>
            <GroupieGrid/>
        </>
    )
}
export default Groupies
