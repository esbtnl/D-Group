import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import patet from '../res/patetbild.png'
import domd from '../res/dömd.png'

function Home() {
    return (
        <div style={{justifyContent: 'center', alignItems: 'center', height:'90vh'}}>
            <Carousel dynamicHeight="false">
                <div>
                    <img src={domd} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={patet} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={"https://imgur.com/IXKo07F"} />
                    <p className="legend">Legend 1</p>
                </div>        

            </Carousel>
        </div>
    )
}
export default Home
