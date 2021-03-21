import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card22';
import Sdata from './Sdata22';
// import './index.css';

// console.log(Sdata[0].sname);

//props in React js stands for properties through which we can create custom attribute
//map method and fat arrow function 


function ncard(val){
  console.log(val)
  return (
    <Card
      imgsrc={val.imgscr}
      title={val.title}
      sname={val.sname}
      link={val.links}
      />
 );
  
}

ReactDOM.render(
<>
    <h1 className="heading_style">Top 5 Webseries on Netflix in 2020</h1>

  
  {Sdata.map(ncard)}
</>,

document.getElementById('root'));
