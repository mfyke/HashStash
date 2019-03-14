import React, { Component } from 'react';
import HowItWorks from './homePage/HowItWorks';
import Stash from './homePage/Stash';
import OurStashes from './homePage/OurStashes';

class Home extends Component {

    render() {
        return (
            <div>
                <HowItWorks />
                <Stash />
                <OurStashes />
                <Stash />
            </div>
        );
    }
}

export default Home;
