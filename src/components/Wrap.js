import React, {Component} from 'react';

import Element from "./Element";
import Counter from "./Counter";

import {Collapse} from "reactstrap"

class Wrap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open:false
        }
    }


    render() {

        const collapse = () => {
            this.setState({
                open: !this.state.open
            })
        };

        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-4">
                        <Element title="Hello world" text="qwgsdafdbbzxbczxb" rasm="/image/facebook.png"/>
                    </div>
                    <div className="col-4">
                        <Element title="salom dunyo" text="adfbadfhlbvdfvhjbdfvh" rasm="/image/instagram.png"/>
                    </div>
                    <div className="col-4">
                        <Element title="привет мир" text="aeiolbzvxckj zyruabl" rasm="/image/telegram.png"/>
                    </div>
                    <div className="offset-4 my-4 col-4">
                        <Counter/>
                    </div>
                    <div className="col-4 my-4">
                        <div className="card ">
                            <div className="card-header" onClick={collapse}>
                                <h5>Lorem ipsum dolor.</h5>
                            </div>
                            <Collapse isOpen={this.state.open}>
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ducimus facilis
                                    impedit ipsam minus modi nihil provident sequi sit voluptates? Atque cupiditate
                                    dolorum eos itaque, quas repellat temporibus. Modi, tempore?
                                </div>
                            </Collapse>
                        </div>
                        <div className="card ">
                            <div className="card-header" onClick={collapse}>
                                <h5>Lorem ipsum dolor.</h5>
                            </div>
                            <Collapse isOpen={this.state.open}>
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ducimus facilis
                                    impedit ipsam minus modi nihil provident sequi sit voluptates? Atque cupiditate
                                    dolorum eos itaque, quas repellat temporibus. Modi, tempore?
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wrap;
