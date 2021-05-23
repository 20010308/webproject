import React, {Component} from 'react';
import axios from "axios";

class Lifecycle extends Component {

    //constructor ---- componenta yaratilayotganda ishledi
    constructor(props) {
        super(props);
        console.log("This is constructor metod");
        this.state = {
            posts: [],
            photos: [],
        }
    }

    //componentDidMount ---- componenta sahifaga chiqib bugandan keyin ishledi
    componentDidMount() {
        console.log("This is componentDidMounts metod");

        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log(res.data);
                this.setState({
                    posts: res.data,
                });
                axios.get("https://jsonplaceholder.typicode.com/photos?_limit=100").then((res2) => {
                    console.log(res2.data);
                    this.setState({
                        photos: res2.data
                    })
                })
            })

    }

    ////componentWillUnmount ---- componenta sahifadan uchib ketayotganda ishledi
    componentWillUnmount() {
        console.log("This is componentWillUnmount metod");

    }

    //componentDidUpdate -----  componentada uzgarish bulgandan keyin ishledi
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("This is componentDidUpdate metod");

    }

    //componentDidCatch  ---  componentda xatolik bugamda ishlaydi
    componentDidCatch(error, errorInfo) {
        console.log("This is componentDidCatch metod");

    }


    // render -------  Componenta sahifaga chiqayotganda ishledi

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.posts.map((item, index) => {
                        return(
                            <div className="col-4 mt-3">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <h5>{item.title}</h5>
                                    </div>
                                    <div className="card-body">
                                        <img src={this.state.photos[index]?.url} className="w-100" alt=""/>
                                        <p className="mt-4">{item.body}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Lifecycle;