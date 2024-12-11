import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = (props) => {
    return (
        <>
            <Link to='/about'><button>About</button></Link>
            <Link to='/portfolio'><button>Portfolio</button></Link>
            <Link to='contact'><button>Contact</button></Link>
            <Link to='/booking'></Link><button>Booking</button>
        </>
    );
};

export default NavigationBar;