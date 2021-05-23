import React from 'react';

const Element = (props) => {

    console.log(props);

    return (
        <div className="card">
            <div className="card-header">
                <h3 >{props.title}</h3>
            </div>
            <div className="card-body">
                <p>{props.text}</p>
                <img src={props.rasm} alt=""/>
            </div>
        </div>
    );
};

export default Element;