import React, {Component} from 'react';
import "./sass/main.scss"

class Appp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users :[
                {
                    name: "Nizom",
                    surname: "Muxammatov",
                    phoneNumber: "+998934366331",
                    email: "nizom702@gmail.com"
                },
                {
                    name: "Umidjon",
                    surname: "Xolmuminov",
                    phoneNumber: "+998990720349",
                    email: "xolmuminov401@gmail.com"
                },
                {
                    name: "palonchi",
                    surname: "palonov",
                    phoneNumber: "+998999999999",
                    email: "palonovpalon123@gmail.com"
                }
            ],
            products:[],
            selectedIndex: -1
        }
    }


    render() {

        const arrayFunction = ()  =>{
            let numbers = [12, 56, -85, 23, -15, 36, -48];

            numbers.forEach((item, index, array) => {
                console.log(item, index, array);
            });

            let mappedNumbers = numbers.map((item, index) => {
                return 1;
            });

            console.log(mappedNumbers);

            let filtrNummbers = numbers.filter((item, index) => {
                return item > 0;
            });
            console.log(filtrNummbers);

            let sortedNumbers = numbers.sort((item1, item2) => {
                return item1 -item2;
            });
            console.log(sortedNumbers);
        };

        arrayFunction();

        const addProduct = (event) => {
            event.preventDefault(); //page qayta yuklanmasligi uchun
            console.log("keldi");

            let productName = event.target.productName.value;
            let productPrice = event.target.productPrice.value;
            let productColor = event.target.productColor.value;

            event.target.reset();

            let newProduct = {
                name: productName,
                price: productPrice,
                color: productColor,
            };

            if (this.state.selectedIndex >= 0){
                this.state.products[this.state.selectedIndex] = newProduct;
            }else {
                this.state.products.push(newProduct);

            }

            this.setState({
                products: this.state.products,
                selectedIndex:-1,
            })

        };

        const deleteProduct = (index) =>{
            this.state.products.splice(index, 1);
            this.setState({
                products: this.state.products,
            })
        };

        const editProduct = (index) => {
            this.setState({
                selectedIndex: index,
            })
        };

        return (
            <div>
                <div className="container">
                    <div className="row mt-5">
                        {this.state.users.map((item, index) => {
                            return(
                                <div className="col-4" key={index}>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>{item.name} {item.surname}</h5>
                                        </div>
                                        <div className="card-body">
                                            <p>Phone number: <b>{item.phoneNumber}</b></p>
                                            <p>Email: <b>{item.email}</b></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="row mt-3">
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={addProduct}>
                                        <input type="text" defaultValue={this.state.products[this.state.selectedIndex]?.name} className="form-control" placeholder="Product name" name="productName"/>
                                        <input type="text" defaultValue={this.state.products[this.state.selectedIndex]?.price} className="form-control mt-3" placeholder="Product price" name="productPrice"/>
                                        <input type="color" defaultValue={this.state.products[this.state.selectedIndex]?.color} className="form-control mt-3" name="productColor"/>
                                        <button type="submit" className="mt-3 btn btn-success d-block ml-auto">Add</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="row">
                                {
                                    this.state.products.map((item, index) => {
                                        return(
                                            <div className="col-3 mb-3">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h4>{item.name}</h4>
                                                    </div>
                                                    <div className="card-body">
                                                        <p>Price: <b>{item.price}</b></p>
                                                        <p>Color: <b >{item.color}</b></p>
                                                    </div>
                                                    <div className="card-footer d-flex justify-content-between">
                                                        <button type="button" onClick={() => editProduct(index)} className="btn btn-primary">Edit</button>
                                                        <button type="button" onClick={() => deleteProduct(index)} className="btn btn-danger">Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Appp;