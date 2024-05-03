import react from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import "./card_1.css";
import Flixdata from './Flixdsta';

// array.map(function(current value,index,arr),thisValue)
const netflixcard = (val) => {
        return(
                <Card 
                key = {val.id} // The word 'key' is for  warning is about using a unique key in console.
                                // Keys are necessary to improve performance of yout React app
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
