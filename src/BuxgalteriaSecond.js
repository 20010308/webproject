// 



import React, { Component } from 'react';

class BuxgalteriaSecond extends Component {
    constructor(props) {
        super(props);

        this.state = {
            informations: [],
            tableInfos: [],
            textarea: '',
            show: true,
            show2: true,
            add: 0 ,
            summ: 0,
            dnone: false,
        }

    }

    render() {

        const showqwqw = () =>{
            this.setState({
                    dnone: !this.state.dnone,
                }
            )
        };

        const showCard = () => {
            this.setState({
                show: !this.state.show
            })
        };
        
        const showCard2 = () => {
            this.setState({
                show2: !this.state.show2
            })
        };

        const changeMoney = (event) => {
            this.setState({
                textarea: event.target.value,
            })
        };

        const addInformation = (event) => {

            let firstName = event.target.enteringName.value;

            event.preventDefault();

            let newInformation = {
                name: firstName,
                money: this.state.textarea
            };

            this.state.informations.push(newInformation);

            this.state.textarea = '';

            this.setState({
                informations: this.state.informations,
                textarea: this.state.textarea
            });

            event.target.reset();

        };

        const kirim = (event) => {
            event.preventDefault();

            let kirimMoney = event.target.kirimMoney.value;
            let kirimFor = event.target.kirimFor.value;

            // this.state.add = parseFloat(this.state.textarea) + parseFloat(kirimMoney);



            let newKirim = {
                kirimSum: kirimMoney,
                kirimWhy: kirimFor,
                type: 'Kirim'
            };

            this.state.summ = this.state.summ + kirimMoney


            this.setState({
                tableInfos: this.state.tableInfos,
                summ: this.state.summ
            });
            event.target.reset();
            
            this.state.tableInfos.push(newKirim);

        };

        
        const chiqim = (event) => {
            event.preventDefault();

            console.log(event);

            let kirimMoney = event.target.kirimMoney.value;
            let kirimFor = event.target.kirimFor.value;
            this.state.summ = this.state.summ - kirimMoney;


            let newChiqim = {
                kirimSum: kirimMoney,
                kirimWhy: kirimFor,
                type: 'Chiqim'
            };

            this.state.tableInfos.push(newChiqim);

            this.setState({
                tableInfos: this.state.tableInfos,
                summ: this.state.summ
            });
            event.target.reset();

        };

        return (

            <>

                <div className="section mt-5 pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-3 {`${this.state.dnone ? '' : 'd-none'}`}">
                                <form onSubmit={addInformation}>

                                    <input type="text" name='enteringName' className="form-control" placeholder='Enter  name...'/>

                                    <input type="number" onChange={changeMoney} value={[this.state.textarea]} name='enteringMoney' className='form-control mt-3' placeholder='Enter money..'/>

                                    <button type='submit' onClick={showqwqw} className="btn btn-outline-success mt-3 ml-auto d-block">Enter</button>

                                </form>
                                <div className="my-5">
                                    <div className={`${this.state.show ? 'd-none' : ''}`}>
                                        <form onSubmit={kirim}>
                                            <input type="number" placeholder='Kirim uchun Enter how much you need' className='form-control' name='kirimMoney'/>
                                            <input type="text" placeholder='Enter why you need' name='kirimFor' className="form-control my-3"/>
                                            <button type='submit' onClick={showCard} className="btn btn-outline-primary  d-block ml-auto">Add</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="">
                                    <div className={` ${this.state.show2 ? 'd-none' : ''}`}>
                                        <form onSubmit={chiqim}>
                                            <input type="number" placeholder='Chiqim uchun Enter how much you need' className='form-control' name='kirimMoney'/>
                                            <input type="text" placeholder='Enter why you need' name='kirimFor' className="form-control my-3"/>
                                            <button type='submit' onClick={showCard2} className="btn btn-outline-primary d-block ml-auto">Add</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="row">
                                    <div className="col-12 mb-5 text-center">
                                        {this.state.informations.map((item, index) => {
                                            return (
                                                <>

                                                    <h4>Salom {item.name.toUpperCase()}</h4>
                                                    <p>Pulingiz <b>{parseFloat(item.money )+ parseFloat(this.state.summ)}</b></p>

                                                    <div className="d-flex mt-3 align-items-center justify-content-center">
                                                        <button type='button' onClick={showCard} className="btn btn-success d-block">Kirim</button>
                                                        <button  type='button' onClick={showCard2} className="btn btn-danger d-block ml-3">Chiqim</button>
                                                    </div>

                                                </>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Why</th>
                                                <th>How much</th>
                                                <th>Type of operation</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {this.state.tableInfos.map((item, index) => {
                                                return(
                                                    <>
                                                        <tr className='py-4'>
                                                            <th>{index + 1}</th>
                                                            <th>{item.kirimWhy}</th>
                                                            <th>{item.kirimSum}</th>
                                                            <th >{item.type}</th>
                                                        </tr>
                                                    </>
                                                )
                                            })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>








                    </div>                  
                </div>




            </>

        )
    }
}

export default BuxgalteriaSecond;

