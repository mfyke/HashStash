import React from 'react';


const OurStashes = () => {
    return (
        <div>
            <div  className="row" id="stashTitleDiv">
                <h1 className="col-md-4">Our Stashes</h1>
            </div>
            <div className="row" id="stashImageContainer">
                <div className="stashText col-10 offset-1 text-center">
                    <h1>$25/MONTH:</h1>
                    <h2>INCLUDES:</h2><br />
                    <h3>1 GRAM PREMIUM INDICA/SATIVA/HYBRID</h3>
                    <h3>5-8 YADA YADA BLAH BLAH</h3>
                    <h3>2 SNACKS</h3><br />

                    <p>*SHIPPED TO YOUR DOOR BY THE 25TH OF THE MONTH*</p>
                </div>
            </div>
        </div>
    );
}

export default OurStashes;