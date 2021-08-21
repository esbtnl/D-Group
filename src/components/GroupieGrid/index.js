import React, { useState } from 'react'
import GroupieCard from './GroupieCard'
import { Grid, Row, Col, Model } from './GroupieGridElements'
import GroupieModel from './GroupieModel'

function GroupieGrid () {
    const [show, setShow] = useState(false)
    const [whichGroupie, setWhichGroupie] = useState("None")

    const toggle = () =>{
        setShow(!show)
    }
    return (
        <>  
            {}

            <GroupieModel toggle={toggle} show={show}/>
            <Grid>
                <Row>
                    <Col size={1}></Col>
                    <Col size={1} onClick={toggle}><GroupieCard/></Col>
                    <Col size={1}></Col>
                    
                </Row>
                <Row>
                    <Col size={1}><GroupieCard/></Col>
                    <Col size={1}><GroupieCard/></Col>
                    <Col size={1}><GroupieCard/></Col>
                </Row>
                <Row>
                    <Col size={1}><GroupieCard/></Col>
                    <Col size={1}><GroupieCard/></Col>
                    <Col size={1}><GroupieCard/></Col>
                </Row>
                <Row>
                    <Col size={1}><GroupieCard/></Col>
                    <Col size={1}><GroupieCard/></Col>
                    <Col size={1}><GroupieCard/></Col>
                </Row>
                <Row>
                    <Col size={1}><GroupieCard/></Col>
                    <Col size={1}><GroupieCard/></Col>
                    <Col size={1}><GroupieCard/></Col>
                </Row>
            </Grid>
        </>
    )
}

export default GroupieGrid 
