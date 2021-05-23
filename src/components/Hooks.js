import React, {useState, useEffect} from 'react';
import axios from "axios";
import {PacmanLoader} from "react-spinners";

const Hooks = () => {

    const [number, setNumber] = useState(0);
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // const number = useState(0);
    // console.log(number);
    //
    const incrementNumber = () => {
        setNumber(number + 1)
    };
    const decrementNumber = () => {
        setNumber(number - 1)
    };

    //componentDidMount va componentDidUpdate vazifasini bajaradi....
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setUsers(res.data);
                setIsLoading(false);
            })
    }, []);

    //bu arrayni destruktizatsiya qilish

    return (
        <div className="container">
            {isLoading ?
                <div className="loader">
                    <PacmanLoader loading={isLoading} color="#7dba29"/>
                </div>
                : ""
            }

            <div className="row mt-5">
                <div className="col-4 offset-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="text-center">{number}</h3>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <button type="button" className="btn btn-primary" onClick={incrementNumber}>+</button>
                            <button type="button" className="btn btn-danger" onClick={decrementNumber}>-</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {users.map((item, index) => {
                    return(
                        <div className="col-4 mt-3">
                            <div className="card-header">
                                <h3>{item.name}</h3>
                            </div>
                            <div className="card-body">
                                <p>
                                    Phone number: <a href={"tel: " + item.phone}>{item.phone}</a>
                                </p>
                                <p>Website: <a href={"https://" + item.website}>{item.website}</a></p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Hooks;