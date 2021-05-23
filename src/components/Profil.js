import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {AvForm, AvField} from "availity-reactstrap-validation"
import "../sass/main.scss"
import {Modal, ModalBody, ModalHeader, ModalFooter} from "reactstrap";
import {toast, ToastContainer} from "react-toastify";
import Students from "../Students";
const Profil = (props) => {

    const [modal1, setModal1] = useState(false);
    const [modal2, setmodal2] = useState(false);

    const openModal1 = () => {
        setModal1(!modal1);
    };

    const openModal2 = () => {
        setmodal2(!modal2);
    };

    const logOut = () => {
        localStorage.clear("parol");
        localStorage.clear("email");

        props.history.push("/registr");
    };

    const SaveParol = (event, error, values) => {
        console.log(values);
        if (values.firstname === localStorage.getItem("parol")){
            localStorage.setItem("parol", values.lastname);
            toast.success("Parol o'zgartirildi")
            openModal2();
        }else {
            toast.error("Eski parolni noto'g'ri kiritdingiz !!!");
            openModal2();
        }
    };


    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-4 mt-5 offset-4">
                    <div className="card">
                        <div className="card-header">
                            <img src="/image/profil.jpg" className="w-100 mb-4 h-50" alt="Error"/>
                            <h4>Biladigan texnalogiyalarim : <b>HTML, Css, Bootstrap, Sass, Javascript, ReactJs</b></h4>
                        </div>

                        <div className="card-footer text-center">
                            <button type="button" className="btn  btn-danger" onClick={openModal1}>Log out</button>
                            <p className="mt-4 text-primary parol" onClick={openModal2}>Parolni o'zgartirish</p>
                            <Link to="/registr">Orqaga</Link>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className="my-5">Reactda backendga zapros yuborish va qabul qilish uni o'zgartirish va o'chirish</h3>

            <Students/>

            <Modal isOpen={modal1} toggle={openModal1}>
                <ModalBody>
                    <h4 className="animate__animated animate__bounce">Rostdan ham profilni o'chirmoqchimisiz</h4>
                </ModalBody>
                <ModalFooter>
                    <div className="d-flex justify-content-between">
                        <button type="button" className="btn mr-5 btn-danger" onClick={logOut}>Ha</button>
                        <button type="button" className="btn btn-warning" onClick={openModal1}>Yo'q</button>
                    </div>
                </ModalFooter>
            </Modal>
            <Modal isOpen={modal2} toggle={openModal2}>
                <AvForm onSubmit={SaveParol}>
                    <ModalBody>
                        <AvField type="password" name="firstname" label="Eski parolni kiriting"/>
                        <AvField type="password" name="lastname" label="Yangi parolni kiriting"/>
                    </ModalBody>
                    <ModalFooter>
                        <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-success mr-5">Save</button>
                            <button type="button" className="btn btn-danger" onClick={openModal2}>Cansel</button>
                        </div>
                    </ModalFooter>
                </AvForm>
            </Modal>
            <ToastContainer/>
        </div>
    );
};

export default Profil;