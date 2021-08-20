import React from 'react'
import { Card, Details, Name, Picture, Post } from './GroupieCardElements'


function Groupie() {
    return (
        <Card>
            <Picture src="https://i.imgur.com/A1hN172.jpg" style={{width: "20vw"}}></Picture>
            <Details>
                <Name>Oscar Lönnqvist</Name>
                <Post>Webb & ÖverDomarenTM</Post>
            </Details>
        </Card>
    )
}

export default Groupie
