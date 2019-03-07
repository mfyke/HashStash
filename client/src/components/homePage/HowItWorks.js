import React from 'react';

const HowItWorks = () => {
    return (
        <div>
            <div id="howTitle" className="row">
                <h1 className="col-md-4">How it Works</h1>
            </div>
            <div id="steps" className="row justify-content-around">
                <div className="col-md-3" id="stepOne">
                    <h3>CREATE AN ACCOUNT</h3>
                    <p>Tell us who you are, upload your valid ID, and input your method of payment.</p>
                    <p>It's free to join with monthly subscriptions that you can cancel at any time.</p>                   
                </div>
                <div className="col-md-3" id="stepTwo">
                    <h3>CHOOSE YOUR BOX</h3>
                    <p>Find the box that best fits you and your lifestyle and we will send you the products you want.</p>
                    <p>With options starting at $25/month, it's an easy choice to stash your hash every month.</p>
                </div>
                <div className="col-md-3" id="stepThree">
                    <h3>ENJOY YOUR STASH</h3>
                    <p>Each month we hand-select and send you the stuff that you want to smoke, snack, and stash.</p>
                    <p>No Contracts.</p>
                    <p>No Commitments.</p>
                    <p>Just Hash Stash.</p>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;