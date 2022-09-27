
import pict from "./logos/main_logo_v2.svg";
import pictblack from "./logos/main_logo_black.svg";
import React from "react";
import { Link } from "react-router-dom";

const manageInventory = () => {
    const data ={
    
        "Inventory" :[
          {
            "id":"1",
            "name":"crocin",
            "count":"250",
            "description":"fever, headache"
          },
          {
            "id":"2",
            "name":"Dolo",
            "count":"400",
            "description":"fever, headache"
          },
          {
            "id":"3",
            "name":"Cough syrup",
            "count":"298",
            "description":"cough"
          },
          {
            "id":"4",
            "name":"Allegra",
            "count":"197",
            "description":"allergy"
          },
          {
            "id":"5",
            "name":"Cetrizine",
            "count":"220",
            "description":"cold,congestion"
          },
        ]
      }
  return (
        <body className="m-0 font-sans antialiased font-normal text-base leading-default bg-gray-100 text-grey-700">

            <main className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded transition-all duration-200">

            <nav className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-3 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start">
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
                        <li className="mt-0.5 w-full rounded border-black border-2 bg-black text-white py-3 mr-2 text-xl flex justify-center place-items-center whitespace-nowrap px-4 transition-colors" href="">
                        <a>Inventory</a>                            
                        </li>
                        <li></li>
                        <li className="mt-0.5 w-full rounded border-black border-2 bg-white text-black py-3 mr-2 text-xl flex justify-center place-items-center whitespace-nowrap px-4 transition duration-300 hover:bg-black hover:text-white" href="">
                        <a>Prescription</a>                            
                        </li>
                       
                        <li>
                        <button className="ml-[1085px] rounded border-black border-2 px-3 py-3 transition duration-300 hover:bg-black hover:text-white">LOGOUT</button>
                        </li>
                    </ul>
                    
                </nav>
                
                </div>
            </nav>

            <div className="w-full px-6 py-6 mx-auto">


                <div className="flex flex-wrap -mx-3">
                <div className="flex-none w-full max-w-full px-3">
                    <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white pb-6 border-1 border-black border-solid shadow-soft-xl rounded bg-clip-border">
                    <div className="p-2 pb-0 mb-0 bg-white border-1 border-b-solid rounded border-black">
                        <h6 className="text-2xl uppercase">Inventory</h6><br/>
                        <button className="font-semibold leading-tight text-xs rounded border-black border-2 px-3 py-3 transition duration-300 hover:bg-black hover:text-white">ADD</button>
                    </div>
                    <br/>
                    <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto">
                        <table className="items-center w-full mb-0 align-top border-black text-grey-700">
                            <thead className="align-bottom">
                            <tr>
                                <th className="px-2 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-m border-b-solid tracking-none whitespace-nowrap text-grey-400 opacity-70">ID</th>
                                <th className="px-2 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-m border-b-solid tracking-none whitespace-nowrap text-grey-400 opacity-70">Name</th>
                                <th className="px-2 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-m border-b-solid tracking-none whitespace-nowrap text-grey-400 opacity-70">Description</th>
                                <th className="px-2 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-m border-b-solid tracking-none whitespace-nowrap text-grey-400 opacity-70">Count</th>
                                <th className="px-2 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none text-m tracking-none whitespace-nowrap text-grey-400 opacity-70"></th>
                            </tr>
                            </thead>
                            <tbody>
                            {data.Inventory.map((item, i) => (
                            
                                //  <td>{item.name}</td> 
                                
                               
                                <tr>
                                    <td className="p-1 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                    <div className="flex px-2 py-1">
                                        <div className="flex flex-col justify-center">
                                        <h6 className="mb-0 leading-normal text-sm">{item.id}</h6>
                                        </div>
                                    </div>
                                    </td>
                                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                    <h6 className="mb-0 leading-normal text-sm">{item.name}</h6>
                                    </td>
                                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                    <h6 className="mb-0 leading-normal text-sm">{item.description}</h6>
                                    </td>
                                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                    <h6 className="mb-0 leading-normal text-sm">{item.count}</h6>
                                    </td>
                                    <td className="p-2 bg-transparent border-b whitespace-nowrap shadow-transparent">
                                    <button href="" className="mr-2 font-semibold leading-tight text-xs rounded border-black border-2 px-3 py-3 transition duration-300 hover:bg-black hover:text-white"> Edit </button>
                                    <button href="" className="font-semibold leading-tight text-xs rounded border-black border-2 px-3 py-3 transition duration-300 hover:bg-black hover:text-white"> Delete </button>
                                    </td>
                                </tr>
                            
                          ))}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
                </div>


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
            </main>

        </body>
  );
}

export default manageInventory;



