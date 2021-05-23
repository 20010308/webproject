import React, {useState, useEffect} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import axios from "axios";
import {AvField, AvForm} from "availity-reactstrap-validation"
import {ToastContainer, toast} from "react-toastify";

import {ClockLoader, PacmanLoader} from "react-spinners";

const HooksTask = () => {

    const [students, setStudents] = useState([]);
    const [modal1, setModal1] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState("");
    const [load, setLoad] = useState(true);

    useEffect(() => {
        getElement()
    }, []);


    const getElement = () => {
        axios.get("https://60978347e48ec000178729f0.mockapi.io/api/students")
            .then((res) => {
                setStudents(res.data);
                console.log(students);
                setLoad(false);
            })
    };

    const closeModal = () => {
       openModal1();
       setSelectedItem({});
    };
    const openModal1 = () => {
        setModal1(!modal1);
    };

    const deleteModall = (id) => {
        setDeleteModal(!deleteModal);
        setDeleteId(id);
    };
    const deleteStudents = () => {
        axios.delete("https://60978347e48ec000178729f0.mockapi.io/api/students/" + deleteId)
            .then((res) => {
                deleteModall();
                getElement();
                toast.dark("O'chirildi");
            })
    };

    const editStudents = (item) => {
        setSelectedItem(item);
        openModal1();
    };

    const saveStudents = (event, error, valuses) => {
        if(selectedItem.id){
            axios.put("https://60978347e48ec000178729f0.mockapi.io/api/students/" + selectedItem.id, valuses)
                .then((res) => {
                    openModal1();
                    getElement();
                    toast.info("Muvaffaqiyatli o'zgartirildi !!!");
                    setSelectedItem({});
                })
        }else {
            axios.post("https://60978347e48ec000178729f0.mockapi.io/api/students", valuses)
                .then((res) => {
                    openModal1();
                    getElement();
                    console.log(res);
                    toast.success("Muvaffaqiyatli qo'shdingiz!!!")
                })
        }
    };


    return (
        <div className="container">
            {
                load ?
                    <div className="loader"><ClockLoader color="green" loading={load}/></div>
                    : ""
            }
            <div className="row">
                <div className="col-12">
                    <button type="button" className="btn m-5 btn-success" onClick={openModal1}>Add</button>
                </div>
                <div className="col-10 offset-1">
                    <table className="table-bordered table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>№</th>
                            <th>Ism familya</th>
                            <th>Yoshi</th>
                            <th>Guruxi</th>
                            <th>O'qish joyi</th>
                            <th>Amallar</th>
                        </tr>
                        </thead>
                        <tbody>
                        {students.map((item, index) => {
                            return(
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{item.name} {item.family}</td>
                                    <td>{item.age}</td>
                                    <td>{item.guruh}</td>
                                    <td>{item.university}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary mr-4" onClick={() => editStudents(item)}>Edit</button>
                                        <button type="button" className="btn btn-danger" onClick={() =>deleteModall(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                    <Modal isOpen={modal1} toggle={closeModal}>
                        <AvForm onSubmit={saveStudents} model={selectedItem}>
                            <ModalHeader toggle={closeModal}>
                                <h5>
                                    Formani to'ldiring
                                </h5>
                            </ModalHeader>
                            <ModalBody>
                                <AvField type="text" name="name" label="Ismni kiriting"/>
                                <AvField type="text" name="family" label="Familyani kiriting"/>
                                <AvField type="number" name="age" label="yoshini kiriting"/>
                                <AvField type="text" name="guruh" label="Guruhing kiriting"/>
                                <AvField type="text" name="university" label="O'qish joyi"/>
                            </ModalBody>
                            <ModalFooter>
                                <button type="submit" className="btn btn-secondary mr-5">Save</button>
                                <button type="button" className="btn btn-warning" onClick={closeModal}>Cansel</button>
                            </ModalFooter>
                        </AvForm>
                    </Modal>
                    <Modal isOpen={deleteModal} toggle={deleteModall}>
                        <ModalBody>
                            <h4>Rostdan ham o'chirmoqchimisiz !!!</h4>
                        </ModalBody>
                        <ModalFooter>
                                <button type="button" className="btn btn-danger" onClick={deleteStudents}>Ha</button>
                                <button type="button" className="btn btn-info" onClick={deleteModall}>Yo'q</button>
                        </ModalFooter>
                    </Modal>
                    <ToastContainer/>
                </div>
            </div>
        </div>
    );
};
export default HooksTask;