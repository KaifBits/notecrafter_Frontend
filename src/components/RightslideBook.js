import React, {  useState } from 'react';
import axios from 'axios';

const RightslideBook = ({ side, setside,refresh,setRefresh }) => {
 
    const [name, setTitle] = useState("");
    const [types, setTypes] = useState("");
    const [status, setStatus] = useState("");
    const [author, setAutohr] = useState("");
  
    const [pg, setPg] = useState(0);
    
    const[aname]=useState(localStorage.getItem("username"));
    
  

    const handleTagChange = (e) => {
       setTypes(e.target.value) ;  
    };

  
    async function handleSubmit(e) {
        e.preventDefault();
        const obj = {
            name: name,
            types: types,
             status: status, // wrap in an array
            author: author,
            page: pg
        };

        try {
            console.log(obj)
            const p = await axios.post(`https://note-backend-dusky.vercel.app/book/upload/${aname}`, obj);
            setRefresh(!refresh);

            console.log("data is",p.data);
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    return (
        <div className={`absolute top-0 left-0 pl-3 h-screen border border-gray-400 duration-500 bg-white ${side ? 'w-0' : 'w-1/2'} overflow-y-auto`}>
            <button onClick={() => setside(true)}>
                <i className="ri-arrow-keft-line"></i>
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
                        <i className="ri-menu-line"></i> Types
                    </p>
                  
                        <span  >
                            {types}
                        </span>
                  
                    <select className="w-40" onChange={handleTagChange}>
                        <option value="fiction">fiction</option>
                        <option value="drama">drama</option>
                        <option value="poetry">poetry</option>
                        <option value="scientific" >scientific</option>
                        <option value="selected" selected>select</option>
                    </select>
                </div>

                <div className="flex w-full h-auto">
                    <p className="text-gray-500 font-mono text-[16px] w-40 h-auto">
                        <i className="ri-file-list-3-line"></i> Author
                    </p>
                    <input
                        className="w-full h-auto break-words"
                        placeholder='List down your ingredients by adding(,)'
                        
                        onChange={(e)=>{setAutohr(e.target.value)}}
                    />
                </div>

                <div className="flex w-full h-auto">
                    <p className="text-gray-500 font-mono text-[16px] w-40 h-auto">
                        <i className="ri-menu-add-line"></i> status
                    </p>
                    <input
                        type="text"
                        className="w-full h-auto break-words"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)} // update this to handle multiple cuisines
                        placeholder="current status"
                    />
                </div>
                <div className="flex w-full h-auto">
                    <p className="text-gray-500 font-mono text-[16px] w-40 h-auto">
                        <i className="ri-menu-add-line"></i> Page No.
                    </p>
                    <input
                        type="number"
                        className="w-full h-auto break-words"
                        value={pg}
                        onChange={(e) => setPg(e.target.value)} // update this to handle multiple cuisines
                        placeholder="enter current page(if ongoing)"
                    />
                </div>

            

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default RightslideBook ;
