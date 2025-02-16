 import React, { useState } from 'react';

const Contact = (props) => {


    // This object is the default form state
    const defaultFormState = {
        name: '',
        email: '',
        phoneNumber: '',
        eventDate: '',
        streetAddress: '',
        service:'',
        quantities: {hair: '', makeup: '', both: ''}
    }

    // useState hook to handle form data, has the above object as the default
    const [formData, setFormData] = useState(defaultFormState);


    // UseState hook to handle radio button state (services)
    const [selectedService, setSelectedService] = useState('');
    



    const handleChange = (e) => {
        const { name, type, value } = e.target;
    
        if (name === 'quantity') {
            setFormData((prevState) => ({
                ...prevState,
                quantities: {
                    ...prevState.quantities,
                    [selectedService]: value // Only update the quantity for the selected service
                }
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }
    };
    

    const handleRadioChange = (e) => {
        const selected = e.target.value;
        setSelectedService(selected);
        setFormData((prevState) => ({
            ...prevState,
            service: selected,
            quantities: {hair: '', makeup: '', both: ''}
        }))
    }

    // needs an axios post request to send data to email, needs work in the backend
    // const submitHandler = () => {

    //     }

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
                            value={formData.date}
                            onChange={handleChange}
                            />
                    </fieldset>

                    {/* SERVICES RADIO BUTTONS */}
                    <fieldset className="servicesField">
                            <legend>Sevices</legend>

                                <label>
                                <input
                                name="service"
                                type="radio"
                                value="hair"
                                onChange={handleRadioChange}
                                />
                                Hair
                                </label>
                                <label>
                                How many
                                <input 
                                type="number"
                                min="0"
                                value={formData.quantities.hair}
                                onChange={handleChange}
                                name="quantity"
                                disabled={selectedService !== 'hair'} 
                                />
                                </label>

                                <label>
                                <input 
                                name="service"
                                type='radio'
                                value="makeup"
                                onChange={handleRadioChange}
                                />
                                Makeup
                                </label>
                                <label>
                                How many
                                <input 
                                type="number"
                                min="0"
                                value={formData.quantities.makeup}
                                onChange={handleChange}
                                name="quantity"
                                disabled={selectedService !== 'makeup'} 
                                />
                                </label>

                                <label>
                                <input 
                                name="service"
                                type="radio" 
                                value="both"
                                onChange={handleRadioChange}
                                />
                                Hair AND Makeup
                                </label>

                                <label>
                                How many
                                <input 
                                type="number"
                                min="0"
                                value={formData.quantities.both}
                                onChange={handleChange}
                                name="quantity"
                                disabled={selectedService !== 'both'} 
                                />
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

                    <button>Submit</button>
                </form>
            </div>
        </>
    );
};

export default Contact; 