import React, {Component} from 'react';
import axios from "axios";
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {toast, ToastContainer} from "react-toastify";

import { ClockLoader } from "react-spinners";

class Students extends Component {

    constructor(props) {
        super(props);
        this.state = {
            students: [],
            open: false,
            selectedItem: {},
            deleteModal: false,
            deleteId: "",
            isLoading: true,
            saveLoading: false
        }
    }

    componentDidMount() {
        axios.get("https://60978347e48ec000178729f0.mockapi.io/api/students")
            .then((res) => {
                console.log(res.data);
                this.setState({
                    students: res.data,
                    isLoading: false
                })
            })
    }

    render() {

        const modalOpen = () => {
            this.setState({
                open: !this.state.open,
            })
        };

        const getStudents = () => {
            axios.get("https://60978347e48ec000178729f0.mockapi.io/api/students")
                .then((res) => {
                    console.log(res.data);
                    this.setState({
                        students: res.data,
                    })
                })
        };

        const changeDeleteStudents = (id) => {
            console.log(id);
            this.setState({
                deleteModal: !this.state.deleteModal,
                deleteId: id,
            })
        };

        const editStudents = (item) => {
            this.setState({
                selectedItem: item,
            });
            modalOpen();
        };

        const deleteStudents = () => {
            axios.delete("https://60978347e48ec000178729f0.mockapi.io/api/students/" + this.state.deleteId)
                .then((res3) => {
                    getStudents();
                    changeDeleteStudents();
                    console.log(res3.data.message);
                    console.log(res3.data.message);
                    console.log("Salom");
                    toast.dark("Muvaffaqiyatli o'chirildi");
                    this.setState({

                    })
                })
                .catch((error) => {
                    toast.error("Xatolik")
                })

        };

        const saveStudents = (event, error, values) => {
            console.log(values);
            console.log(this.state.selectedItem);
            console.log("hello");

            this.setState({
               saveLoading: true,
            });

            if (this.state.selectedItem.id){
                axios.put("https://60978347e48ec000178729f0.mockapi.io/api/students/" + this.state.selectedItem.id, values)
                    .then((res) => {
                        modalOpen();
                        getStudents();
                        toast.warning("Muvaffaqiyatli o'zgartirildi");
                        this.setState({
                            selectedItem: {}
                        })
                })
                    .finally(() => {
                        this.setState({
                            saveLoading: false
                        })
                    })

            }else{
                axios.post("https://60978347e48ec000178729f0.mockapi.io/api/students", values)
                    .then((res2) => {
                        modalOpen();
                        getStudents();
                        toast.success("Muvaffaqiyatli bajarildi");
                    })
                    .catch((error) => {
                        toast.error("Xatolik")
                    })
                    .finally(() => {
                        this.setState({
                            saveLoading: false
                        })
                    })
            }


        };

        const toggleModal = () =>{
          modalOpen();
          this.setState({
              selectedItem: {}
          })
        };



        return (
            <div className="container">

                {
                    this.state.isLoading ?
                    <div className="loader"><ClockLoader color="green" loading={this.state.isLoading}/></div>
                    : ""
                }
                <div className="row">
                    <div className="col-12">
                        <button type="button" className="btn my-5 btn-success" onClick={modalOpen}>Add</button>
                    </div>
                    <div className="col-12">
                        <table className="table-striped table table-bordered table-bordered">
                            <thead>
                            <tr>
                                <th>№</th>
                                <th>Ism familya</th>
                                <th>Yoshi</th>
                                <th>Guruxi</th>
                                <th>O'qish joyi</th>
                                <th>O'zgartirish</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.students.map((item, index) => {
                                return(
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.name} {item.family}</td>
                                        <td>{item.age}</td>
                                        <td>{item.guruh}</td>
                                        <td>{item.university}</td>
                                        <td className="d-flex justify-content-between">
                                            <button type="button" className="btn btn-primary mr-3" onClick={() => editStudents(item)}>Edit</button>
                                            <button type="button" className="btn btn-danger" onClick={() => changeDeleteStudents(item.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                            <Modal isOpen={this.state.open} toggle={toggleModal}>
                                <ModalHeader toggle={toggleModal}>Add students</ModalHeader>
                                <AvForm onSubmit={saveStudents} model={this.state.selectedItem}>
                                    <ModalBody>
                                        <AvField type="text" name="name" label="Ismni kiriting"/>
                                        <AvField type="text" name="family" label="Familyani kiriting"/>
                                        <AvField type="number" name="age" label="Yoshini kiriting"/>
                                        <AvField type="text" name="guruh" label="Guruhini kiriting"/>
                                        <AvField type="text" name="university" label="O'qish joyi"/>
                                    </ModalBody>
                                    <ModalFooter>
                                        <button type="submit" className="btn btn-success" disabled={this.state.saveLoading}>
                                            {this.state.saveLoading ? <span className="spinner-border spinner-border-sm"></span> : ""}
                                            Save</button>
                                        <button type="button" onClick={modalOpen} className="btn btn-success">Cansel</button>
                                    </ModalFooter>
                                </AvForm>
                            </Modal>
                            <Modal isOpen={this.state.deleteModal} toggle={changeDeleteStudents}>
                                <ModalBody>
                                    <h3>Rostdan ham uchirmoqchimisiz</h3>
                                </ModalBody>
                                <ModalFooter>
                                    <button type="button" className="btn btn-primary" disabled={this.state.saveLoading} onClick={deleteStudents}>
                                        {this.state.saveLoading ? <span className="spinner-border spinner-border-sm"></span>: ""}
                                        Ha</button>
                                    <button type="button" className="btn btn-danger" onClick={changeDeleteStudents}>Yo'q</button>
                                </ModalFooter>
                            </Modal>
                        </table>
                    </div>
                </div>
                <ToastContainer/>
            </div>
        );
    }
}

export default Students;