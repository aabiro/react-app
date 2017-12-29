//could do...
// function person() {
//   return <h2>
// }

//instead use ES6 below..

import React from 'react';

const person = (props) => {
    //return some JSX -looks like HTML, with some dynamic Javascript content
    //return <p>Im a Person and Im {Math.floor(Math.random() * 30)} years old</p>
    //dynamic content set from outside tags
    return (
      <div>
          <p>Im {props.name} and Im {props.age} years old</p>
          <p>{props.children}</p>
      </div>)
};


export default person;
