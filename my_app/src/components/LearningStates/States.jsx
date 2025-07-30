import React, { useState } from 'react'

const States = () => {
        // States
        // Initializes state value
        let [myAge, setmyAge] =useState(45)
        // Initializes state value
        // let [fname, setFname] =useState("Haris")
        // Initializes state value
         let [fruits, setFruits] =useState(["Mango","Pineapple","Guava"])



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


  return (

    // fragments <> </>
    <>
      <div>
        <h2>age : {age} years</h2>
        <h2>myAge : {myAge} years</h2>
        <button onClick={increaseAge}>Increase Age</button>
      </div>
      <div>
        
        <button onClick={addFruit}>Add Fruit</button>
      </div>

    </>
  )
}

export default States
