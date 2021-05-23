import React, {Component} from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            son: 0
        }
    }


    render() {

        const increment = () => {
            this.setState({
                son: this.state.son + 1
            });

        };
        const dicrement = () => {
            this.setState({
                son: this.state.son - 1
            });
        };

        const changeInput = (event) => {


            this.setState({
                son: parseInt(event.target.value)
            })
        };
        return (
            <div className="card">
                <div className="card-body">
                    <h1 className="my-4 text-center">{this.state.son}</h1>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <button type="button" className="btn btn-success" onClick={increment}>+</button>

                    <input type="range" value={this.state.son} max={100} min={0} onChange={changeInput} className="form-control p-0"/>

                    <button type="button" className="btn btn-danger" onClick={dicrement}> - </button>
                </div>
            </div>
        );
    }
}

export default Counter;