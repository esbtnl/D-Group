import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import patet from '../res/patetbild.png'
import domd from '../res/dömd.png'

function Home() {
    return (
        <div style={{justifyContent: 'center', alignItems: 'center', height:'90vh'}}>
            <Carousel 
            dynamicHeight={true}
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            transitionTime={1}>
                
                <div>
                    <img src={domd} alt="DÖMD"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={patet} alt="Patet"/>
                    <p className="legend">Legend 1</p>
                </div> 
                <div>
                    <img src={"https://i.imgur.com/IXKo07F.jpg"} alt="Current"/>
                    <p className="legend">Legend 1</p>
                </div>      

            </Carousel>
        </div>
    )
}
export default Home
