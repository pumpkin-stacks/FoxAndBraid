import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = (props) => {
    return (
        <>
            <div className='navBar'>
                <Link to='/'><button>Home</button></Link>
                <Link to='/about'><button>About</button></Link>
                <Link to='/portfolio'><button>Portfolio</button></Link>
                <Link to='contact'><button>Contact</button></Link>
                <Link to='/booking'><button>Booking</button></Link>
            </div>
        </>
    );
};

export default NavigationBar;