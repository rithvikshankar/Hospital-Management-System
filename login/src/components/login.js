// import style1 from './login.module.css';
import pict from "./logos/main_logo_v2.svg";


import React from "react";
import { Link } from "react-router-dom";

const login = () => {
  return (
        <div className="grid grid-cols-2 h-screen">
    
            <div className="flex justify-center flex-col items-center">
                <br/><br/>
                <form className="flex flex-col justify-center place-items-center">
                
                <h1 className="text-4xl font-semibold mb-6" style = {{color: "rgb(19, 140, 214)"}}>Log in as {' '}
                <select className="text-4xl form-select inline-block px-3 py-1.5 text-base font-semibold bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-current focus:bg-white focus:outline-none active:text-grey-700">

                    <option selected className="text-3xl">User</option>
                        <option className="text-3xl" value="Patient">Patient</option>
                        <option className="text-3xl" value="Doctor">Doctor</option>
                        <option className="text-3xl" value="Receptionist">Receptionist</option>
                        <option className="text-3xl" value="Pharmacist">Pharmacist</option>
                        <option className="text-3xl" value="Admin">Admin</option>
                </select> </h1>
                <br/>
                
                <input type = "text" placeholder = "Email" className ="block w-full px-4
                py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                rounded transition duration-300 ease-in-out m-0 focus:text-gray-700 focus:bg-[#dbf0fe] focus:border-[#dbf0fe] 
                focus:outline-none"/><br/>
                
                <input type = "text" id = "password" placeholder="Password" className ="block w-full px-4
                py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                rounded transition duration-300 ease-in-out m-0 focus:text-gray-700 focus:bg-[#dbf0fe] focus:border-[#dbf0fe] 
                focus:outline-none"/>
                <br/>
{/*                 
                <span>Forgot password? Click </span>
                <span id = "here"><a href = "about:blank">here</a></span> <br/> */}

               
                <br/><br/><br/><br/><br/>
                <button type = "submit" className="inline-block px-7 py-3 bg-[#138CD6] text-white font-medium rounded shadow-md 
                hover:bg-[#1275B4] hover:shadow-lg focus:bg-[#138CD6] focus:shadow-lg focus:outline-none focus:ring-0 
                active:bg-[#12689E] active:shadow-lg transition duration-150 ease-in-out">
                    LOG IN
                </button>
                </form>
            </div>
            
            <div className="flex justify-center flex-col items-center bg-[#138CD6] flex"><br/><br/>
                <h1 className="text-5xl text-white font-semibold mb-6">Welcome to name!</h1><br/>
                <img className="object-cover w-60 h-60" src = {pict} alt = "project_logo"/>
                <br/>
                <button className="inline-block px-7 py-3 bg-[#138CD6] border-white border-4 text-white font-medium rounded 
                shadow-md hover:bg-white hover:text-[#138CD6] uppercase hover:shadow-lg focus:shadow-lg 
                focus:outline-none focus:ring-0 active:bg-white active:shadow-lg transition duration-150 ease-in-out">
                    Sign up as Patient
                </button>
            </div>
    </div>
           
        
  );
};
  
export default login;


