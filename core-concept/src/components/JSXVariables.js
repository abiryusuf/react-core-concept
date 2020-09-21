import React from "react";

// const name = 'Abir';
// const name2 = "Yusuf"
// const num1 = 2;
// const num2 =4;
// JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods



function JXSVariable(props){
  
   
    return (
        <div className="main-container">
            <div className="container">
                <div className="jumbotron">
                    <h2>My name is {props.name}, but you can call me {props.name2}</h2>
                </div>
               
            </div>
        </div>
    );
}
export default JXSVariable;