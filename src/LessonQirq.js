import React, {Component} from 'react';
import "./sass/main.scss"

class LessonQirq extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student: [],
            selectedIndex: -1
        }
    }


    render() {


        const addStudent = (event) => {

            event.preventDefault();

            let studentName = event.target.name.value;
            let studentSurname = event.target.surname.value;
            let studentDate = event.target.date.value;
            let educitType = event.target.talimTuri.value;

            if(studentName.length > 0 && studentSurname.length > 0 &&studentDate.length > 0){


                let newStudents = {
                    ismi: studentName,
                    familyasi: studentSurname,
                    tugilKuni: studentDate,
                    talim: educitType,
                };

                if(this.state.selectedIndex >= 0){
                    this.state.student[this.state.selectedIndex] = newStudents;
                }else {
                    this.state.student.push(newStudents);


                }
                this.setState({
                    student: this.state.student,
                    selectedIndex: -1,
                });
                event.target.reset();
            }else {
                alert("Malumotlarni tuldiring");
            }




        };
        const editStudent = (index) =>{
            this.setState({
                selectedIndex: index,
            })
        };
        const deleteStudent = (index) =>{
            this.state.student.splice(index, 1);
            this.setState({
                student: this.state.student,
            })
        };

        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-3" key={this.state.selectedIndex}>
                        <div className="card">
                            <form onSubmit={addStudent}>
                                <div className="card-body">

                                        <label htmlFor="ism">Talabaning ismini kiriting</label>
                                        <input type="text" id="ism" defaultValue={this.state.student[this.state.selectedIndex]?.ismi} className="form-control" placeholder={"Name"} name="name"/>
                                        <label htmlFor="familya" className="mt-3">Talabaning familyasini kiriting</label>
                                        <input type="text" id="familya" defaultValue={this.state.student[this.state.selectedIndex]?.familyasi} className="form-control" placeholder={"Surname"} name="surname"/>
                                        <label htmlFor="sana" className="mt-3">Talabaning tug'ilgan kuni</label>
                                        <input type="date" id="sana" defaultValue={this.state.student[this.state.selectedIndex]?.tugilKuni} className="form-control" name="date"/>
                                        <label htmlFor="talim" className="mt-3">Ta'lim turi</label>
                                        <select name="talimTuri" className="form-control" id="talim">
                                            <option value="Grant">Grant</option>
                                            <option value="Kantrakt">Kantrakt</option>
                                        </select>

                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-success d-block ml-auto">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-9">
                        <table className="table table-bordered table-striped table-active">
                            <thead>
                                <tr>
                                    <th>№</th>
                                    <th>Ism familya</th>
                                    <th>Tug'ilgan sana</th>
                                    <th>Talim turi</th>
                                    <th>Amallar</th>
                                </tr>
                            </thead>
                            <tbody>

                            {
                                this.state.student.map((item, index) => {
                                    return(
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.ismi + (" ") + item.familyasi}</td>
                                            <td>{item.tugilKuni}</td>
                                            <td>{item.talim}</td>
                                            <td className="d-flex justify-content-between">
                                                <button type="button" className="btn btn-primary" onClick={ () => editStudent(index)}>Edit</button>
                                                <button type="button" className="btn btn-danger" onClick={ () => deleteStudent(index)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default LessonQirq;