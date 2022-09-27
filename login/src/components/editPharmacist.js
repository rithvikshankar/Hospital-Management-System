
import pict from "./logos/main_logo_v2.svg";
import pictblack from "./logos/main_logo_black.svg";
import React from "react";
import { Link } from "react-router-dom";

const editPharmacist = () => {
    const data ={
    
        "Pharmacist" :[
          {
            "id":"122",
            "name":"John",
            "last_name":"Doe",
            "email":"j@gmail.com",
            "age":"25",
            "contact":"1234567890",
            "address":"Xyz-street"
          }
        ]
      }
  return (
        <body className="m-0 font-sans antialiased font-normal text-base leading-default bg-gray-100 text-grey-700">


            {/* <main className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded transition-all duration-200"> */}

            <nav className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start">
                <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
                <nav className="text-xl">
                    <ul>
                        <li>
                            <img className="object-cover ml-[690px] w-25 h-20" src = {pictblack} alt = "project_logo"/>
                        </li>
                        <li className="object-cover ml-[615px]">
                            Hospital Management System 
                        </li>
                    </ul>
                    <br/>
                    <ul className="flex">
                        <li className="mt-0.5 w-full rounded border-black border-2 bg-white text-black py-3 mr-2 text-xl flex justify-center place-items-center whitespace-nowrap px-4 transition duration-300 hover:bg-black hover:text-white" href="">
                        <a>Doctors</a>                            
                        </li>
                        <li className="mt-0.5 w-full rounded border-black border-2 bg-white text-black py-3 mr-2 text-xl flex justify-center place-items-center whitespace-nowrap px-4 transition duration-300 hover:bg-black hover:text-white" href="">
                        <a>Inpatients</a>                            
                        </li>
                        <li className="mt-0.5 w-full rounded border-black border-2 bg-white text-black py-3 mr-2 text-xl flex justify-center place-items-center whitespace-nowrap px-4 transition duration-300 hover:bg-black hover:text-white" href="">
                        <a>Outpatients</a>                            
                        </li>
                        <li className="mt-0.5 w-full rounded border-black border-2 bg-white text-black py-3 mr-2 text-xl flex justify-center place-items-center whitespace-nowrap px-4 transition duration-300 hover:bg-black hover:text-white" href="">
                        <a>Receptionists</a>                            
                        </li>                  
                        <li className="mt-0.5 w-full rounded border-black border-2 bg-black text-white py-3 mr-80 text-xl flex justify-center place-items-center whitespace-nowrap px-4 transition-colors" href="">
                        <a>Pharmacists</a>                            
                        </li>
                        <li>
                        <button className="ml-80 rounded bg-white border-black border-2 px-3 py-3 transition duration-300 hover:bg-black hover:text-white">LOGOUT</button>
                        </li>
                    </ul>
                    
                </nav>
                
                </div>
            </nav>

            <div className="w-full px-6 py-6 mx-auto">

             {data.Pharmacist.map((item, i) => (
                <form className="flex flex-col justify-center place-items-center">
                    
                    <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        ID
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
                        py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-400 focus:bg-white" id="grid-first-name" type="text" value={item.id}/>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                        leading-tight focus:outline-none focus:bg-white focus:border-gray-400" id="grid-last-name" type="text" 
                        placeholder={item.name+' '+item.last_name}/>
                    </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                            Email
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                            mb-3 leading-tight focus:outline-none focus:border-gray-400 focus:bg-white" id="grid-email" type="text" placeholder={item.email}/>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Age
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                            leading-tight focus:outline-none focus:bg-white focus:border-gray-400" id="grid-password" type="text" 
                            placeholder={item.age}/>
                        </div> 
                    </div>
                    <div className="w-full md:w-[30rem] px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                            Contact
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 
                        rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-400 focus:bg-white" id="grid-address" type="text" 
                        placeholder={item.contact}/>
                    </div>
                    <div className="w-full md:w-[30rem] px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                        Address
                        </label>
                        <textarea rows="4" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 
                        rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-400 focus:bg-white" id="grid-address" type="text" 
                        placeholder={item.address}/>
                    </div>

                
                <br/>
                <ul>
                    <li>
                    <button type = "submit" className="px-7 py-3 bg-white mb-3 w-[174px] uppercase rounded border-black border-2 px-3 py-3 transition duration-300 hover:bg-black hover:text-white">
                            Reset Password
                        </button>
                    </li>
                    <li>
                        <button type = "submit" className="px-7 py-3 bg-white uppercase rounded border-black border-2 px-3 py-3 transition duration-300 hover:bg-black hover:text-white">
                            back
                        </button>
                        <button type = "submit" className="ml-3 px-7 py-3 bg-white uppercase rounded  border-black border-2 px-3 py-3 transition duration-300 hover:bg-black hover:text-white">
                            register
                        </button>
                    </li>
                </ul>          
                
                </form>
             ))}


                        <footer className="pt-4">
                        <div className="w-full px-6 mx-auto">
                            <div className="flex flex-wrap items-center -mx-3 lg:justify-between">
                            <div className="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
                                <div className="leading-normal text-center text-xl text-grey-700 lg:text-left">
                                Tarp Project
                                </div>
                            </div>
                            <div className="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
                                <ul className="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
                                <li className="nav-item">
                                    <a href="" className="block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-xl text-grey-700" target="_blank">About Us</a>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </footer>
                    </div>
                {/* </main> */}

        </body>
  );
}

export default editPharmacist;



