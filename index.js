import react from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import "./card_1.css";
import Flixdata from './Flixdsta';

// array.map(function(current value,index,arr),thisValue)
const netflixcard = (val) => {
        return(
                <Card 
                sname = {val.sname}
                imgsrc = {val.imgsrc}
                title = {val.title}
                link = {val.link}
        /> 
        );
}

ReactDom.render(
 <>
        <h1 className='heading_style' >List of top Netflix Series  </h1>
     
        
        {Flixdata.map(netflixcard)}
 </>,
 document.getElementById('root')

);