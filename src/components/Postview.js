import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";


const Postview = (props) => {

    const [post, setPost] = useState({});

    console.log(props);
    console.log(props);
    console.log(props);

    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/posts/" + props.match.params.id)
            .then((res) => {
                setPost(res.data)
            })
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 offset-3 my-5">
                    <div className="card">
                        <div className="card-header">
                            <h5>{post.title}</h5>
                        </div>
                        <div className="card-body">
                            {post.body} <Link to="/posts">Orqaga</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Postview;