import React, { useState, useEffect } from 'react';

const Hotel = () => {
    const [checkboxes, setCheckboxes] = useState({
        creditcard: false,
        bikeParking: false,
        restaurantTakeOut: false,
        wifi: false,
        goodForKids: false,
        restaurantAffairs: false,
        goodforgroup: false,
        garage: false,
        street: false,
        lot: false,
        valet: false,
    });

    const handleCheckboxChange = (event) => {
        const { id, checked } = event.target;
        setCheckboxes((prevCheckboxes) => ({
            ...prevCheckboxes,
            [id]: checked,
        }));
    };

    useEffect(() => {
        console.log(checkboxes);
    }, [checkboxes]);

    const checkboxLabels = {
        creditcard: "Business accepts credit cards",
        bikeParking: "Bike Parking",
        restaurantTakeOut: "Restaurant Take Out",
        wifi: "WIFI",
        goodForKids: "Good For Kids",
        restaurantAffairs: "Restaurant Affairs",
        goodforgroup: "Restaurant Good For Groups",
        garage: "Garage",
        street: "Street",
        lot: "Lot",
        valet: "Valet",
    };

    return (
        <>
            <h4 className=''>Hotel preferences:</h4>
            <div className='d-flex flex-row'>
                <div className="">
                    <div className="d-flex flex-column">
                        {Object.keys(checkboxLabels).slice(0, 6).map((key) => (
                            <div className="form-group" key={key}>
                                <input
                                    type="checkbox"
                                    className='checkbox'
                                    id={key}
                                    onChange={handleCheckboxChange}
                                    checked={checkboxes[key]}
                                />
                                <label htmlFor={key} className="ml-2">{checkboxLabels[key]}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="preference-section">
                    <div className="d-flex flex-column">
                        {Object.keys(checkboxLabels).slice(6).map((key) => (
                            <div className="form-group" key={key}>
                                <input
                                    type="checkbox"
                                    className='checkbox'
                                    id={key}
                                    onChange={handleCheckboxChange}
                                    checked={checkboxes[key]}
                                />
                                <label htmlFor={key} className="ml-2">{checkboxLabels[key]}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hotel;
