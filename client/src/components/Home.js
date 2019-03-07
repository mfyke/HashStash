import React, { Component } from 'react';
import HowItWorks from './homePage/HowItWorks';
import Stash from './homePage/Stash';

class Home extends Component {

    render() {
        return (
            <div>
                <HowItWorks />
                <Stash />
            </div>
        );
    }
}

export default Home;
