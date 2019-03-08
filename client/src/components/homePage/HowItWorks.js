import React from 'react';

const HowItWorks = () => {
    return (
        <div>
            <div id="howTitle" className="row">
                <h1 className="col-md-4">How it Works</h1>
            </div>
            <div id="steps" className="row  justify-content-around">
                
                <div className="col-md-10 col-10 col-lg-3" id="stepOne">
                    <h3 className="howItTitle">CREATE AN ACCOUNT</h3>
                    <p className="howItParagraph">Tell us who you are, upload your valid ID, and input your method of payment.</p>
                    <p className="howItParagraph">It's free to join with monthly subscriptions that you can cancel at any time.</p>                   
                </div>
                <div className="col-md-10 col-10 col-lg-3" id="stepTwo">
                    <h3 className="howItTitle">CHOOSE YOUR BOX</h3>
                    <p className="howItParagraph">Find the box that best fits you and your lifestyle and we will send you the products you want.</p>
                    <p className="howItParagraph">With options starting at $25/month, it's an easy choice to stash your hash every month.</p>
                </div>
                <div className="col-md-10 col-10 col-lg-3" id="stepThree">
                    <h3 className="howItTitle">ENJOY YOUR STASH</h3>
                    <p className="howItParagraph">Each month we hand-select and send you the stuff that you want to smoke, snack, and stash.</p>
                    <p className="howItParagraph">No Contracts.</p>
                    <p className="howItParagraph">No Commitments.</p>
                    <p className="howItParagraph">Just Hash Stash.</p>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;