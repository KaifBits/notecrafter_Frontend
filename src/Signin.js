import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext'; 
import { Link, useNavigate } from 'react-router-dom';
import img from "./components/utils/logo.png";

const Signin = () => {
    const { login: authLogin } = useAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errormsg, setErrormsg] = useState("");

    async function login(e) {
        e.preventDefault();
        console.log(username);
        
        try {
            const response = await axios.post("https://note-backend-dusky.vercel.app/login", { username, password });
            console.log("You are authorized: " + response.data);
            localStorage.setItem('username', username);
            localStorage.setItem('isAuthenticated', 'true'); // Save authentication state
            authLogin(); // Call the login function from AuthContext
            setTimeout(() => {
                navigate("/home");
            }, 3000);
        } catch (error) {
            setErrormsg("Your password is wrong! Please check it.");
            console.log("The actual error is: ", error);
        }
    }

    return (
        <div className='flex'>
            <section className="bg-purple-200 w-2/3">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Link to="#" className="flex items-center mb-6 text-2xl font-semibold text-black">
                        NoteCrafter
                    </Link>
                    <img src={img} alt="Logo" className='size-16 left-40' />
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={login}>
                                <div>
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Your username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500">Remember me</label>
                                        </div>
                                    </div>
                                    <Link to="#" className="text-sm font-medium text-primary-600 hover:underline">Forgot password?</Link>
                                </div>
                                <button
                                    type="submit"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                                >
                                    Sign in
                                </button>
                                <p className="text-sm font-light text-gray-500">
                                    Don’t have an account yet? <Link to="/signup" className="font-medium text-primary-600 hover:underline">Sign up</Link>
                                </p>
                                {errormsg && <p className="text-red-600">{errormsg}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <img src="https://i.pinimg.com/564x/9a/12/31/9a12316963fd1e10b1b3679ad5d2f2cf.jpg"   className='w-1/2 h-full bg-slate-400' alt="Background" />
        </div>
    );
}

export default Signin;
