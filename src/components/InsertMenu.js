import React, {  useState } from 'react';
import axios from 'axios';

const InsertMenu = ({ side, setside,refresh,setRefresh }) => {
    const [ingrediants, setIngredients] = useState([]);
    const [name, setTitle] = useState("");
    const [tags, setTags] = useState([]);
    const [cuisin, setCuisine] = useState("");
    const [steps, setSteps] = useState([]);
    const [stepInput, setStepInput] = useState(false);
    const [text, setText] = useState("");
    const aname=localStorage.getItem("username");
    
    const handleIngredientsChange = (e) => {
        const arr = e.target.value.split(",").map(item => item.trim());
        setIngredients(arr);
    };

    const handleTagChange = (e) => {
        const arr=[];
        if(tags.length>1){
            tags.forEach(val => {
                if (val !== e.target.value) {
                  arr.push(val);
                }
              });
        if(e.target.value!=="selected"){
        arr.push(e.target.value);
        }
        setTags(arr);
    }
    else{
        setTags([...tags,e.target.value])
    }
        
    };

    const handleAddStep = () => {
        setSteps([...steps, text]);
        setText("");
        setStepInput(false);
    };

    async function handleSubmit(e) {
        e.preventDefault();
        const obj = {
            name: name,
            tags: tags,
            cuisin: [cuisin], // wrap in an array
            ingrediants: ingrediants,
            steps: steps
        };

        try {
            console.log(obj)
            const p = await axios.post(`https://note-backend-g5waba8w5-rank-boards-projects.vercel.app/create/${aname}`, obj);
            setRefresh(!refresh);

            console.log("data is",p.data);
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    return (
        <div className={`absolute top-0 left-0 pl-3 h-screen border border-gray-400 duration-500 bg-white ${side ? 'w-0' : 'w-1/2'} overflow-y-auto`}>
            <button onClick={() => setside(true)}>
                <i className="ri-arrow-left-line"></i>
            </button>

            <form onSubmit={handleSubmit} className="flex flex-col items-start space-y-8 space-x-3 h-auto max-h-full">
                <h1 className="text-4xl font-bold">
                    <input
                        type="text"
                        className='w-full'
                        value={name}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                    />
                </h1>

                <div className="flex space-x-2 w-full h-auto">
                    <p className="text-gray-500 font-mono text-[16px] w-40 h-auto">
                        <i className="ri-menu-line"></i> Tags
                    </p>
                    {tags.map((val, index) => (
                        <span key={index} className={`border border-black rounded-lg w-auto p-1 ${val === "Dinner" ? "bg-gray-400" : val === "Easy" ? "bg-green-400" : val === "Medium" ? "bg-yellow-400" : "bg-red-400"}`}>
                            {val}
                        </span>
                    ))}
                    <select className="w-40" onChange={handleTagChange}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                        <option value="Dinner" >Dinner</option>
                        <option value="selected" selected>select</option>
                    </select>
                </div>

                <div className="flex w-full h-auto">
                    <p className="text-gray-500 font-mono text-[16px] w-40 h-auto">
                        <i className="ri-file-list-3-line"></i> Ingredients
                    </p>
                    <input
                        className="w-full h-auto break-words"
                        placeholder='List down your ingredients by adding(,)'
                        
                        onChange={handleIngredientsChange}
                    />
                </div>

                <div className="flex w-full h-auto">
                    <p className="text-gray-500 font-mono text-[16px] w-40 h-auto">
                        <i className="ri-menu-add-line"></i> Cuisine
                    </p>
                    <input
                        type="text"
                        className="w-full h-auto break-words"
                        value={cuisin}
                        onChange={(e) => setCuisine(e.target.value)} // update this to handle multiple cuisines
                        placeholder="Cuisine (comma separated)"
                    />
                </div>

                <div className="flex w-full h-auto">
                    <p className="text-gray-500 font-mono text-[16px] w-40 h-auto">
                        <i className="ri-chat-forward-fill"></i> Steps
                    </p>
                    <ul className="w-full h-auto space-y-2">
                        {steps.map((val, key) => (
                            <li key={key} className="flex items-start space-x-2 h-auto font-medium">
                                <input type="checkbox" />
                                <span className="break-words leading-none"> {val} </span>
                            </li>
                        ))}
                        {stepInput && (
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    placeholder="Add a step"
                                />
                                <button type="button" onClick={handleAddStep}>Add</button>
                            </div>
                        )}
                        <span onClick={() => setStepInput(true)} className="cursor-pointer">+</span>
                    </ul>
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default InsertMenu;
