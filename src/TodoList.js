import React, {Component} from 'react';
import {Progress} from "reactstrap";

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            done: [],
            selectedIndex: -1,
            text: "",
            prog: 0,
        }
    }

    render() {


        const addTask = (event) => {
            event.preventDefault();

            this.state.tasks.push(this.state.text);
            event.target.inputcha.value = "";
            console.log(this.state.tasks);
            this.setState({
                    tasks: this.state.tasks,
                    text: "",
                    prog: this.state.prog
                }
            )

        };
        const changeInput = (event) => {
            // console.log(event.target.value);
            this.setState({
                text: event.target.value,
            })
        };

        const deletetask = (index) =>{
            this.state.done.splice(index, 1);
            this.setState({
                done: this.state.done,
                prog: this.state.prog,
            })
        };

        const done = (index) => {
            this.state.done.push(this.state.tasks[index]);
            this.state.tasks.splice(index, 1);

            this.state.prog =(this.state.done.length * 100) / (this.state.tasks.length + this.state.done.length);

            console.log(this.state.tasks);
            console.log(this.state);
            this.setState({
                tasks: this.state.tasks,
                done: this.state.done,
                prog: this.state.prog
            })
        };
        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-10 offset-1">
                        <div className="card">
                            <div className="card-header text-center"><h2>Your to do list</h2></div>
                            <div className="card-body">
                                <form onSubmit={addTask}>
                                    <div className="input-group">
                                        <input onChange={changeInput} name="inputcha" type="text"
                                               className="form-control"/>
                                        <div className="input-group-append">
                                            <button type="submit" className="btn btn-success">Add</button>
                                        </div>
                                    </div>
                                    <Progress name="prog" className="mt-4" value={this.state.prog}></Progress>
                                </form>


                                <div className="row mt-3">
                                    <div className="col-6">
                                        {this.state.tasks.map((item, index) => {
                                            return (
                                                <div
                                                    className="alert alert-primary d-flex justify-content-between align-items-center">
                                                    <h6>{this.state.tasks[index]}</h6>
                                                    <button type="button" className="btn btn-success"
                                                            onClick={() => done(index)}>+
                                                    </button>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="col-6">
                                        {this.state.done.map((item, index) => {
                                            return (
                                                <div
                                                    className="alert alert-primary d-flex justify-content-between align-items-center">
                                                    <h6>{this.state.done[index]}</h6>
                                                    <button type="button" className="btn btn-danger" onClick={() =>deletetask(index)}>&times;</button>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default TodoList;