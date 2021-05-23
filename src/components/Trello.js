import React, {Component} from 'react';

class Trello extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardShow: false,
            textArea: "",
            boards: [],
            areas: [],
            selectedIndex: -1
        }
    }


    render() {

        // let number1 = 12;
        // let number2 = 32;
        // number1 > number2 ? console.log(number1) :console.log(number2);
        const changeCardShow = () => {
            this.setState({
                cardShow: !this.state.cardShow,
            });

        };

        const changeTitle = (event) =>{
            this.setState({
                textArea: event.target.value,
            })
        };

        const addBoard = () =>{

            let newBoard = {
                title: this.state.textArea,
                tasks: []
            };

            if (this.state.selectedIndex >= 0){
                this.state.boards[this.state.selectedIndex].title = newBoard.title;
            }else {
                this.state.boards.push(newBoard);
            }


            this.setState({
                boards: this.state.boards,
                textArea: "",
                selectedIndex: -1,
                selectedIndex2: -1
            })
        };

        const changeAreas = (event, index) => {

            this.state.areas[index] = event.target.value;

            this.setState({
                areas: this.state.areas
            });

            console.log(this.state.areas);
        };

        const addTask = (index) => {

            if(this.state.selectedIndex2 >= 0){
                this.state.boards[this.state.selectedIndex].tasks[this.state.selectedIndex2] = this.state.areas[index];
            }else{
                this.state.boards[index].tasks.push(this.state.areas[index]);
            }
            this.state.areas[index] = "";

            this.setState({
                boards: this.state.boards,
                areas: this.state.areas,
                selectedIndex: -1,
                selectedIndex2: -1,
            })
        };

        const deleteTask= (index1, index2) => {
            this.state.boards[index1].tasks.splice(index2, 1);
            this.setState({
                boards: this.state.boards
            })
        };
        const deleteBoards= (index) => {
            this.state.boards.splice(index, 1);
            this.setState({
                boards: this.state.boards
            })
        };

        const editBoards = (index) =>{
            this.setState({
                selectedIndex: index,
                textArea: this.state.boards[index].title,
            })
        };

        const editTask = (index, index2) =>{
            this.state.areas[index] = this.state.boards[index].tasks[index2];
            this.setState({
                selectedIndex: index,
                selectedIndex2: index2,
                areas: this.state.areas,
            })
        };


        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-3">
                        <button type="button" onClick={changeCardShow} className="btn btn-success btn-block">Add board</button>

                        {/*{this.state.cardShow?*/}
                        {/*    <div className="card mt-3">*/}
                        {/*        <div className="card-body">*/}
                        {/*            <textarea name="boardTitle" className="form-control" placeholder="Type here"></textarea>*/}
                        {/*    */}
                        {/*            <button type="button" className="btn btn-success btn d-block ml-auto mt-3">Add</button>*/}
                        {/*        </div>*/}
                        {/*    </div> :""*/}
                        {/*}*/}

                    <div className={`card mt-3 ${this.state.cardShow ? "" : "d-none"}`}>
                        <div className="card-body">
                            <textarea onChange={changeTitle} value={this.state.textArea} name="boardTitle" className="form-control" placeholder="Type here"></textarea>

                            <button type="button" className="btn btn-success btn d-block ml-auto mt-3" onClick={addBoard}>Add</button>
                        </div>
                    </div>

                    </div>
                    <div className="col-9">
                        <div className="row">
                            {this.state.boards.map((item, index)  =>{
                                return(
                                    <div className="col-4 mb-3">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4 onClick={() => editBoards(index)}>{item.title}</h4>
                                                <div className="task-close" onClick={() => deleteBoards(index)}>&times;</div>
                                            </div>
                                            <div className="card-body">
                                                {item.tasks.map((item1, index1) => {
                                                    return(
                                                        <div className="task" onClick={() => editTask(index, index1)}>{item1}<span><div className="task-close" onClick={() => deleteTask(index, index1)}>&times;</div></span></div>
                                                    )
                                                })}
                                            </div>
                                            <div className="card-footer">
                                                <textarea className="form-control" placeholder="Type hear" value={this.state.areas[index]} onChange={(event) => changeAreas(event, index)}></textarea>
                                                <button type="button" className="btn btn-success d-block ml-auto mt-3" onClick={() => addTask(index)}>Add</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Trello;