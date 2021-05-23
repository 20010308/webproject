
import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {AvForm, AvField} from 'availity-reactstrap-validation';
import axios from 'axios';
import {ToastContainer, toast} from "react-toastify";


import { PacmanLoader } from "react-spinners";

class Employee extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            employees: [],
            deleteOpen: false,
            selectedId: "",
            selectedItem: {},
            isLoading: true,
            saveLoading: false,
            username: ""
        }
    }

    componentDidMount() {
        axios.get("https://nimadir.herokuapp.com/api/employee")
            .then((res2) => {
                console.log(res2);

                this.setState({
                    employees: res2.data.object,
                    isLoading: false
                })
            })
    }


    render() {

        const deleteEmployee = () => {
            axios.delete("https://nimadir.herokuapp.com/api/employee/" + this.state.selectedId)
                .then((res) => {
                    console.log(res);
                    getEmploye();
                    changeDeleteModal();
                    toast.success(res.data.message);
                })
                .catch((error) => {
                    toast.error("Xatolik");
                })
        };
        const getEmploye = () =>{
            axios.get("https://nimadir.herokuapp.com/api/employee")
                .then((res2) => {
                    console.log(res2);
                    this.setState({
                        employees: res2.data.object
                    })
                });
        };
        const showEditModal = (item) =>{
            this.setState({
                selectedItem: item,
            });
            changeModal();
        };

        const changeDeleteModal = (id) =>{
            this.setState({
                deleteOpen: !this.state.deleteOpen,
                selectedId: id,
            });

        };

        const changeModal = () => {
            this.setState({
                open: !this.state.open,
                selectedItem: {}
            })
        };

        const saveEmployee = (event, errors, values) => {
            console.log(event);
            console.log(event);
            console.log(event);

            this.setState({
                saveLoading: true
            });
           if (this.state.selectedItem.id){
               axios.put("https://nimadir.herokuapp.com/api/employee/" + this.state.selectedItem.id, values)
                   .then((res) => {
                       getEmploye();
                       toast.success(res.data.message);
                       changeModal();
                       this.setState({
                           selectedItem: {}
                       })
                           .catch((error) => {
                               toast.error("Xatolik");
                           })
                   })
           }else {
               axios.post("https://nimadir.herokuapp.com/api/employee", values)
                   .then((res) => {
                       toast.success(res.data.message);
                       getEmploye();
                       changeModal();
                   })
                   .catch((error) => {
                       toast.error("Xatolik");
                   })
                   .finally(() => {
                       this.setState({
                           saveLoading: false,
                       })
                   })
           }

        };

        const login = () => {
            localStorage.setItem("username", this.state.username);
            this.props.history.push("/hooks");
        };
        const changeUsername = (event) => {
            this.setState({
                username: event.target.value
            })
        };

        return (
            <div className="container">

                <input type="text" name="username" onChange={changeUsername} className="form-control my-4" placeholder="Your username"/>
                <button type="button" onClick={login} className="btn btn-success">Login</button>

                {localStorage.getItem("username")}

                {this.state.isLoading ?
                    <div className="loader">
                        <PacmanLoader color="aqua" loading={this.state.isLoading}/>
                    </div> : ""
                }

                <div className="row">
                    <div className="col-12">
                        <button type="button" className="btn btn-success my-5" onClick={changeModal}>Add</button>
                    </div>

                    {this.state.employees.map((item, index) => {
                        return (
                            <div className="col-4 mt-3">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>{item.firstName} {item.lastName}</h5>
                                    </div>
                                    <div className="card-body">
                                        <p>Age: <b>{item.age}</b></p>
                                        <p>Salary: <b>{item.salary}</b></p>
                                        <p>Position: <b>{item.position}</b></p>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between">
                                        <button type="button" className="btn btn-primary" onClick={() => showEditModal(item)}>Edit</button>
                                        <button type="button" className="btn btn-danger" onClick={() =>changeDeleteModal(item.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <Modal isOpen={this.state.open} toggle={changeModal}>
                    <ModalHeader toggle={changeModal}>Add Employee</ModalHeader>
                    <AvForm onSubmit={saveEmployee} model={this.state.selectedItem}>
                        <ModalBody>

                            <AvField type="text" name="firstName" label="Employee name"/>

                            <AvField type="text" name="lastName" label="Employee surname"/>

                            <AvField type="number" name="age" label="Employee age"/>

                            <AvField type="number" name="salary" label="Employee salary"/>

                            <AvField type="select" name="position" label="Employee position">
                                <option value="Director">Director</option>
                                <option value="Security">Security</option>
                                <option value="Driver">Driver</option>
                                <option value="Programmer">Programmer</option>
                            </AvField>
                        </ModalBody>
                        <ModalFooter>
                            <button type="submit" className="btn btn-success" disabled={this.state.saveLoading}>
                                {this.state.saveLoading ? <span className="spinner-border spinner-border-sm"></span> : ""}
                                Save
                            </button>
                            <button type="button" className="btn btn-secondary" onClick={changeModal}>Cancel</button>
                        </ModalFooter>
                    </AvForm>
                </Modal>
                <Modal isOpen={this.state.deleteOpen} toggle={changeDeleteModal}>
                    <ModalBody>
                        <h4>Rostdan xam uchirmoqchimisiz</h4>
                    </ModalBody>
                    <ModalFooter>
                        <button type="button" className="btn btn-danger" onClick={deleteEmployee}>Ha</button>
                        <button type="button" className="btn btn-secondary" onClick={changeDeleteModal}>Yo'q</button>
                    </ModalFooter>
                </Modal>
                <ToastContainer/>
            </div>
        );
    }
}

export default Employee;



//
//
// import React, {Component} from 'react';
// import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
// import {AvForm, AvField} from 'availity-reactstrap-validation';
// import axios from "axios";
//
//
// class Employee extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             open: false,
//             employess: [],
//         }
//     }
//
//     componentDidMount() {
//         axios.get("https://nimadir.herokuapp.com/api/employee")
//             .then((res2) => {
//                 console.log(res2);
//                 this.setState({
//                     employess: res2.data.object,
//                 })
//             })
//     }
//
//     render() {
//
//         const changeModal = () =>{
//             this.setState({
//                 open: !this.state.open
//             })
//         };
//
//         const saveEmployee =(event, errors, values) => {
//             console.log(values);
//             console.log(errors);
//             axios.post("https://nimadir.herokuapp.com/api/employee", values)
//                 .then((res) => {
//
//                     axios.get("https://nimadir.herokuapp.com/api/employee")
//                         .then((res2) => {
//                             console.log(res2);
//                             console.log(res2.data.object);
//                             this.setState({
//                                 employees: res2.data.object
//                             })
//                         });
//                     console.log(res);
//
//                     changeModal();
//                 })
//
//         };
//
//
//
//         return (
//             <div>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-12">
//                             <button type="button" onClick={changeModal} className="btn btn-success mt-5">Add</button>
//                         </div>
//                         {this.state.employess.map((item, index) =>{
//                             return(
//                                 <div className="col-4 mt-3">
//                                     <div className="card">
//                                         <div className="card-header">
//                                             <h5>{item.firstName} {item.lastName}</h5>
//                                         </div>
//                                         <div className="card-body">
//                                             <p>Age: <b>{item.age}</b></p>
//                                             <p>Salary: <b>{item.salary}</b></p>
//                                             <p>Position: <b>{item.position}</b></p>
//                                         </div>
//                                         <div className="card-footer d-flex justify-content-between">
//                                             <button type="button" className="btn btn-primary">Edit</button>
//                                             <button type="button" className="btn btn-danger">Delete</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                     </div>
//
//                     <Modal isOpen={this.state.open} toggle={changeModal}>
//                         <ModalHeader toggle={changeModal}>
//                             Add Employee
//                         </ModalHeader>
//                         <AvForm onSubmit={saveEmployee}>
//                             <ModalBody>
//
//                                 <AvField type="text" name="firstName" label="Employee name"/>
//                                 <AvField type="text" name="lastName" label="Employee surname"/>
//                                 <AvField type="number" name="age" label="Employee age"/>
//                                 <AvField type="number" name="salary" label="Employee salary"/>
//
//                                 <AvField type="select" name="position" label="Employee position">
//                                     <option value="Director">Director</option>
//                                     <option value="Secury">Secury</option>
//                                     <option value="Driver">Driver</option>
//                                     <option value="Developer">Developer</option>
//                                 </AvField>
//
//                             </ModalBody>
//                             <ModalFooter>
//                                 <button type="submit" className="btn btn-success">Save</button>
//                                 <button type="button" className="btn btn-secondary" onClick={changeModal}>Cansel</button>
//                             </ModalFooter>
//                         </AvForm>
//                     </Modal>
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default Employee;