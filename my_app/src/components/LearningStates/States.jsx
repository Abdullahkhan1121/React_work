import React, { useState } from 'react'

const States = () => {
        // States
        // Initializes state value
        let [myAge, setmyAge] =useState(45)
        // Initializes state value
        // let [fname, setFname] =useState("Haris")
        // Initializes state value
         let [fruits, setFruits] =useState(["Mango","Pineapple","Guava"])

         let [bulbStatus, setBulbStatus] =useState("ON")



         let age = 45;

        // Normal Function
        // functionincrease(){

        //}

        // Arrow Function
        const increaseAge =()=>{
           age += 1;
        setmyAge(myAge += 1)
        console.log(age, myAge)
        }

        const addFruit =()=>{
            let fruit = document.getElementById("fruit").value
            if (fruit == "") {
                alert("Please fill the Value")
            } else {
                // Spread / Rest Operator (...)
                // Spread
                // let newFruits=[...fruits,fruit]
                // console .log(newFruits)

                setFruits([...fruits,fruit])
                console.log(fruits)
            }
        }
        function toggleBulb(){
          if (bulbStatus == "ON") {
            setBulbStatus("OFF")
          } else {
            setBulbStatus("ON")
          }
        }




  return (

    // fragments <> </>
    <>
      <div>
        <h2>age : {age} years</h2>
        <h2>myAge : {myAge} years</h2>
        <button onClick={increaseAge}>Increase Age</button>
      </div>
      <div>
      <input type="text" id='fruit' placeholder='Enter New Fruits' />
      <button onClick={addFruit}>Add Fruit</button>
      {
        fruits.map((fruit,index)=>{
          return (
            <li>{fruit}</li>
          )
        }
      )
      }
      </div>

      <div>
        {
          bulbStatus == "ON" ? <h1>Bulb Is On</h1> : <h1>Bulb Is Off</h1>
        }
        <img src={bulbStatus == "ON" ? "on.jpg" : "off.jpg" } height={400} width={350} />
        <button onClick={toggleBulb}>ON/OFF</button>
      </div>

    </>
  )
}

export default States
