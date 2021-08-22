import React from 'react'
import { Card, Details, Email, Name, Picture, Post } from './GroupieCardElements'


function Groupie({toggle, name, post, email, image}) {
    return (
        <Card>
            <Picture src={image} onClick={toggle} style={{width: "20vw"}}></Picture>
            <Details>
                <Name>{name}</Name>
                <Post>{post}</Post>
                <Email href = {"mailto:" + email}>{email}</Email>
            </Details>
        </Card>
    )
}

export default Groupie
