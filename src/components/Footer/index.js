import React from 'react'
import { Col, Grid, Row } from './FooterElements'

function Footer() {
    return (
        <Grid>
            <Row height={"1vh"}>
                <Col size={1} color={"#754022"}></Col>
                <Col size={1} color={"#E5398D"}></Col>
                <Col size={1} color={"#F7E623"}></Col>
            </Row>
            <Row height={"25vh"}>
                <Col size={1} color={"#fff"}></Col>
                <Col size={1} color={"#fff"}></Col>
                <Col size={1} color={"#fff"}></Col>
            </Row>

        </Grid>
    )
}

export default Footer
