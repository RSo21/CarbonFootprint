// import React from 'react';

// import {Component} from 'react';

import "../fontello/css/fontello.css";

import React, { useState, useEffect} from 'react';

const Energy = () =>{
    const [footprintList, setFootprintList] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/footprint')
        .then((response)=>{
            return response.json();
        })
        .then((footprint)=>{
            setFootprintList(footprint);
        });
    },[]);
 
   
        return (
            <>
            {footprintList.map((footprint)=>{
                return (
                    <>
                    <div>
                        <p>{footprint.type}</p>
                        <div>
                            {footprint.answer.map((answer, id) => <p key={id}>{answer}</p>)}
                        </div>
                    </div>
                </>
                );
            })}
        </>
        )
    
    
};
export default Energy;





// state = {
//     footprintList: [],
// }

// componentDidMount() {
//     fetch(`http://localhost:4000/footprint`)
//     .then((response) => {
//         return response.json();
        
//     })
//     .then((data) => {
//         this.setState({
//             footprintList: data,
//         })
//     });
// }
