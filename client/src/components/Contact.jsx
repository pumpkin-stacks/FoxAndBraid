import React, { useState } from 'react';

const Contact = (props) => {



//  Name 
// Email
// Phone number 
// Date of event
// Services; hair. Makeup. Or Both hair and makeup 
// How many people needing services
// Location 

    return (
        <>
        <p>CONTACT PAGE</p>
        <p>test</p>
        <p>test</p>
            <div className='info'>
                <form>
                    <label>Name</label>
                    <input type="text" />

                    <label>Email</label>
                    <input type="email" />

                    <label>Phone Number</label>
                    <input type="number" />

                    <label>Date of Event</label>
                    <input type="date" />

                    <label>Services</label>
                    <input type="checkbox" />

                    <label>Location</label>
                    <input type="text" />

                    
                </form>
            </div>
        </>
    );
};

export default Contact; 