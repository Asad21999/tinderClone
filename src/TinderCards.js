import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import database from './firebase';


import './TinderCards.css'
// import { useState } from 'react';
import { useEffect } from 'react';


function TinderCards() {
     
const  [people,setPeople]=useState([
    // {
    //     name:"asad",
    //     url:"https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFybXN8ZW58MHx8MHx8&w=1000&q=80"
    // },
    // {

    //     name:"ajju",
    //     url:"https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFybXN8ZW58MHx8MHx8&w=1000&q=80"
    
    // }
]);

useEffect(()=>{
    const unsubscribe= database.collection('people').onSnapshot(snapshot=>{
        setPeople(snapshot.docs.map((doc)=>doc.data()))
    });
    return ()=>{
        unsubscribe();  
    }
},[])
// setPeople( [...'Asad',"ajju"])

    return (
    <div className='tinderCards__cardContainer'>
        
       
      {
          people.map(person=>(
               <TinderCard 
               className='swipe'
               key={person.name}
               preventSwipe={['up','down']}
               >
                   <div  style={{
                       
                       backgroundImage:`url(${person.url})`}} 
                   className='card'>
                   <h3>{person.name}</h3>

                   </div>
               </TinderCard>
          ))
      }
    </div>
  )
}

export default TinderCards
