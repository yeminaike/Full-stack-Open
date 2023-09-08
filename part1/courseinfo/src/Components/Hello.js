import React, { Component } from "react";




const Hello =(props)=>{
        const school = props.school
        const age  = props.age

        const bornYear =()=> new Date().getFullYear - age
    
    
return(
    <div>
        <p>
            The name of your school is{props.school}, you are{props.age} years old
        </p>
        <p>So you were probably born in {bornYear()}</p>
    </div>
)
}
export default Hello;


    
