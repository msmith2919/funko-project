import React from 'react'
import {Link} from "react-router-dom";

function Box(props){

    const [name]=React.useState(props.name);
    const [category] = React.useState(props.category);
    const [value] = React.useState(props.value);
    const [img] = React.useState(props.img);

    /*let style ={
        display: "inline-block",
        verticalAlign: 'top',

        padding: "7px",
        border: 'black solid 1px',
        width: '300px',
        borderTop: 'gray solid 1px',
        margin: '20px 0',
        gridTemplateColumns:" 120px 120px 120px",
        fontSize:"10px",
        backgroundColor:"lightCoral"
    };*/



    return (

        <div className="character">
            <Link to={"/dataPage/"+name}>

                    <img src={img} alt={img}/>
                    <h1>Name: {name}</h1>
                    <h2>Category: {category}</h2>
                    <h3>Value: {value}</h3>


            </Link>
        </div>
    )
}


export default Box;