import React, { useState } from 'react';

const Contact = (props) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        eventDate: '',
        services: ['Hair', 'Makeup', 'Both'],
        streetAddress: '',
        
    })
    
    const handleChange = (e) => {
        const {name, email, phoneNumber, eventDate, services, location} = e.target;
        if (type === 'checkbox' && name === 'services') {
            setFormData((prevState) => ({
                ...prevState,
                services: checked
                ? [...prevState.services, value]
                : prevState.services.filter((service) => service !== value),
            }))
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }))
        }   
    }


    return (
        <>
            <p>CONTACT PAGE</p>
            <div className='info'>
                <form className='form'>

                    <fieldset className='contactField'>
                        <legend>Contact info</legend>
                            <label>Name</label>
                            <input 
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            />

                            <label>Email</label>
                            <input 
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            />

                            <label>Phone Number</label>
                            <input 
                            type="number"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="(000)-000-0000"
                            />

                            <label>Date of Event</label>
                            <input 
                            type="date"
                            name="date"
                            value={formData.name}
                            onChange={handleChange}
                            />
                    </fieldset>





                    <fieldset className="servicesField">
                            <legend>Sevices</legend>

                                <label>
                                <input 
                                type="checkbox" 
                                />
                                Hair
                                </label>
                                <label>
                                How many
                                <input type="number" />
                                </label>

                                <label>
                                <input 
                                type='checkbox'
                                />
                                Makeup
                                </label>
                                <label>
                                How many
                                <input type="number" />
                                </label>

                                <label>
                                <input 
                                type="checkbox" 
                                />
                                Hair AND Makeup
                                </label>

                                <label>
                                How many
                                <input type="number" />
                                </label>
                    </fieldset>




                    <fieldset className='addressField'>
                        <legend>Venue Address</legend>

                            <label>Street</label>
                            <input 
                            type="text"
                            name="streetAddress"
                            value={formData.streetAddress}
                            onChange={handleChange}
                        />

                            <label>City</label>
                            <input type="text" />

                            <label>State</label>
                            <input type="text" />

                            <label>Zip</label>
                            <input type="text" />
                    </fieldset>


                </form>
            </div>
        </>
    );
};

export default Contact; 