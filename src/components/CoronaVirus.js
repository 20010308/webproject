import React, {Component} from 'react';
import axios from "axios";

class CoronaVirus extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jamikasallar: "",
            sogayganlar: "",
            bugungiSana: "",
            TotalRecovered: "",
            davlatlar: [],

        }
    }

    componentDidMount() {
        axios.get("https://api.covid19api.com/summary")
            .then((res) => {
                 console.log(res.data);
                 this.setState({
                     jamikasallar: res.data.Global.TotalConfirmed,
                     sogayganlar: res.data.Global.TotalRecovered,
                     davlatlar: res.data.Countries,
                     ulganlar: res.data.Global.TotalDeaths,
                     bugungiSana: res.data.Date,
                 })
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mt-5">
                        <h3>Jami kasallanganlar: {this.state.jamikasallar}</h3>
                        <h3>Jami sog'ayganlar: {this.state.sogayganlar}</h3>
                        <h3>Jami vafot etganlar: {this.state.ulganlar}</h3>
                        <h2>Yangilangan sana: {this.state.bugungiSana}</h2>

                    </div>
                    <div className="col-12 mt-4">
                        <table className="table table-striped table-bordered table-hover">
                            <thead>
                            <tr>
                                <th>№</th>
                                <th>Davlatlar</th>
                                <th>Kasallanganlar</th>
                                <th>Sog'ayganlar</th>
                                <th>Vafot etganlar</th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.state.davlatlar.map((item, index) => {
                                    return(
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>{this.state.davlatlar[index].Country}</td>
                                            <td>{this.state.davlatlar[index].NewConfirmed}</td>
                                            <td>{this.state.davlatlar[index].NewRecovered}</td>
                                            <td>{this.state.davlatlar[index].NewDeaths}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default CoronaVirus;