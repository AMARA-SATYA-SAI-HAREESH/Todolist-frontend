import { Member } from './member';
import "./memberlist.css";
import ButtonStyle from './stylebutton';
import React, { useState } from 'react';
import Confetti from 'react-confetti';
const people =[
    { name: "John Doe", city: "New York" },
    { name: "Jane Smith", city: "Los Angeles" },
    { name: "Michael Johnson", city: "Chicago" },
    { name: "Emily Davis", city: "Houston" },
    { name: "Daniel Martinez", city: "Phoenix" },
    { name: "Sophia Garcia", city: "Philadelphia" },
    { name: "Matthew Rodriguez", city: "San Antonio" },
    { name: "Olivia Wilson", city: "San Diego" },
    { name: "James Anderson", city: "Dallas" },
    { name: "Isabella Thomas", city: "San Jose" },
    { name: "Alexander Taylor", city: "Austin" },
    { name: "Mia Moore", city: "Jacksonville" },
    { name: "Benjamin Jackson", city: "Fort Worth" },
    { name: "Charlotte White", city: "Columbus" },
    { name: "William Harris", city: "Charlotte" },
    { name: "Amelia Martin", city: "San Francisco" },
    { name: "Elijah Thompson", city: "Indianapolis" },
    { name: "Evelyn Garcia", city: "Seattle" },
    { name: "Lucas Martinez", city: "Denver" },
    { name: "Harper Robinson", city: "Washington" },
    { name: "Henry Clark", city: "Boston" },
    { name: "Abigail Lewis", city: "El Paso" },
    { name: "Sebastian Lee", city: "Nashville" },
    { name: "Avery Walker", city: "Detroit" },
    { name: "Jack Hall", city: "Oklahoma City" },
    { name: "Ella Allen", city: "Portland" },
    { name: "Jackson Young", city: "Las Vegas" },
    { name: "Lily Hernandez", city: "Memphis" },
    { name: "Aiden King", city: "Louisville" },
    { name: "Chloe Wright", city: "Baltimore" },
    { name: "Samuel Scott", city: "Milwaukee" },
    { name: "Grace Green", city: "Albuquerque" },
    { name: "David Adams", city: "Tucson" },
    { name: "Victoria Baker", city: "Fresno" }
  ];

function MemberList() {
    const [luckyperson,setLuckyPerson]= useState("");
    const [loading, setLoading] = useState(false);
    const [celebration, setCelebration] = useState(false);
    function PickPerson() {
      setLoading(true);
      console.log("Lucky Draw Button Clicked");
        const randomIndex = Math.floor(Math.random() * people.length);
        const person=people[randomIndex]
        console.log(people[randomIndex]); // Log the selected person to the console
        const luckyMessage=`${person.name} from ${person.city}`;
        setTimeout(() => {
            setLuckyPerson(luckyMessage);
            setLoading(false);
            setCelebration(true);
        }, 5000); 
    }  
    return ( 
    <>
      {celebration && <Confetti numberOfPeaces={1000} wind={0.03}/>}
    <div className="members-container">
          {people.map(function(member){
            return <Member name={member.name} city={member.city}/>  
          })}
        </div> 
        <div className='flex-center'>
          {loading && <h3>Loading</h3>}
          <h2>{luckyperson}</h2>
          <ButtonStyle text="Lucky Draw" onClick={PickPerson}/>
          </div>
        </>
        );
}

export default MemberList;