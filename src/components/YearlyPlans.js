import React, { useEffect, useState } from 'react';
import img from "./utils/goal.png";
import axios from 'axios';

const YearlyPlans = () => {
  const [goal, setGoal] = useState(''); // State to hold the current input value
  const [goalsList, setGoalsList] = useState([]); // State to hold the list of goals
   const[name]=useState(localStorage.getItem("username"));
  const handleInputChange = (event) => {
    setGoal(event.target.value); // Update state as the user types
  };
useEffect(()=>{
async function n() {

 const d= await axios.get(`https://note-backend-dusky.vercel.app/getplans/${name}`);
 setGoalsList(d.data.plans);
}
n()
},[name])
 async function handleKeyPress (event) {
    if (event.key === 'Enter' && goal.trim()) {
      const arr=[...goalsList,goal] // Check if Enter is pressed and the input is not empty
      setGoalsList([...goalsList, goal]);
      console.log(arr);
      await axios.post(`https://note-backend-dusky.vercel.app/plans/${name}`,arr);
       
      setGoal(''); // Clear input field
    }
  };

  return (
    <div>
      <div className='w-full h-80 bg-sky-300'></div>
      <img src={img} className="absolute size-36 left-40 top-52" alt="Movie Background" />
      <div className='w-full h-full'>
        <h1 className='flex items-center justify-center font-bold text-4xl h-20 w-full ml-16'>
          Yearly Goals
        </h1>
        <h1 className=' flex items-center justify-center text-lg text-gray-500 from-neutral-500 font-sans w-full ml-16 mb-3'>Your Vision, Your Victory.</h1>
        <div className="flex flex-col items-center justify-center font-semibold text-xl h-auto w-full ml-16">
          <input
            type="text"
            value={goal}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="border p-2 w-80"
            placeholder="Type your goal and press Enter"
          />
          <ul className="mt-4 list-disc ml-6">
            {goalsList?.map((item, index) => (
              <li key={index}>{item}</li> // Render the list of goals
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default YearlyPlans;
