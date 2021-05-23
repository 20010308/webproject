import React, {useState, useEffect} from 'react';
import {AvForm, AvField} from "availity-reactstrap-validation"


const Regitr = (props) => {
    console.log(props);

    const saveRegistr = (event, error, values) => {
        console.log(event);
        console.log(values);
        localStorage.setItem("ism", values.ism);
        localStorage.setItem("familya", values.familya);
        localStorage.setItem("parol", values.parol);
        localStorage.setItem("email", values.email);
        props.history.push("/login")
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-4 offset-4 mt-4">
                    <AvForm onSubmit={saveRegistr}>
                        <AvField type="text" name="ism" label="Ismingizni kiriting"/>
                        <AvField type="text" name="familya" label="Familyangizni kiriting"/>
                        <AvField type="password" name="parol" label="Parol kiriting"/>
                        <AvField type="text" name="email" label="Emailni kiriting"/>
                        <button type="submit" className="btn btn-success btn-block mt-4">Registr</button>
                    </AvForm>
                </div>
            </div>
        </div>
    );
};

export default Regitr;