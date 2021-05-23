import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const UserView = (props) => {

    const [user, setUser] = useState([]);
    console.log(props);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users/" + props.match.params.id)
            .then((res) => {
                setUser(res.data);
                console.log(user);
            })
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 offset-3 mt-5">
                    <div className="card">
                        <div className="card-header">
                            <h4>{user.name}</h4>
                        </div>
                        <div className="card-body">
                            <h5>Email: {user.email}</h5>
                            <h6 className="mb-5">Phone number : <a href={'tel:'+user.phone}>{user.phone}</a></h6>
                            <Link to="/posts">Orqaga</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserView;