import React from 'react';
import {AvForm, AvField} from "availity-reactstrap-validation"
import {ToastContainer, toast} from "react-toastify";

const Login = (props) => {

    const login = (event, error, values) =>{
        if (values.pass === localStorage.getItem("parol") && values.email === localStorage.getItem("email")){
            localStorage.setItem("logit", true);
            props.history.push("/profil");
        }else{
            toast.error("Parol yoki emailni xato kiritdingiz!!!");
        }
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-4 offset-4 mt-5">
                    <AvForm onSubmit={login}>
                        <AvField type="password" label="Parolni kiriting" name="pass"/>
                        <AvField type="text" label="Emailni kiriting" name="email"/>
                        <button type="submit" className="btn btn-primary btn-block mt-3">Login</button>
                    </AvForm>
                    <ToastContainer/>
                </div>
            </div>
        </div>
    );
};

export default Login;