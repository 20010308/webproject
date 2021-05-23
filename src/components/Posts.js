import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                setPosts(res.data);
                console.log(res.data);

                axios.get("https://jsonplaceholder.typicode.com/users")
                    .then((res2) => {
                        console.log(res2.data);
                        console.log(res2.data[1].name);
                        setUsers(res2.data)
                    })
            })
    }, []);

    return (
        <div className="container">
            <div className="row">
                {posts.map((item, index) => {
                    return(
                        <div className="col-4 mt-3">
                            <div className="card">
                                <div className="card-body">
                                    {item.title} <Link to={"/posts/" + item.id}>Batafsil</Link>
                                </div>
                                {

                                }
                                <div className="card-footer">
                                    <h4>Author : <Link to={'/users/' + item.userId}>{
                                        users.filter((item2, index2) => {
                                            return item2.id === item.userId
                                        })[0]?.name
                                    }</Link></h4>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Posts;