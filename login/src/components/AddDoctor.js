
import pict from "./logos/main_logo_v2.svg";
import pictblack from "./logos/main_logo_black.svg";
import React from "react";
import { Link } from "react-router-dom";

const AddMedicine = () => {
    const data ={
      }
  return (
        <body className="m-0 font-sans antialiased font-normal text-base leading-default bg-gray-100 text-grey-700">

            <main className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded transition-all duration-200">

            <div className="w-full px-6 py-6 mx-auto">

            
                <form className="flex flex-col justify-center place-items-center">
                    
                    <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-name">
                        Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
                        py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-400 focus:bg-white" id="grid-name" type="text" placeholder="crocin"/>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-description">
                        Description
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                        leading-tight focus:outline-none focus:bg-white focus:border-gray-400" id="grid-description" type="text" 
                        placeholder="fever"/>
                    </div>
                    </div>
                    <div className="w-full md:w-[30rem] px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-count">
                           Count
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 
                        rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-400 focus:bg-white" id="grid-count" type="text" 
                        placeholder="102"/>
                    </div>
                
                <br/>
                <ul>
                    <li>
                        <button type = "submit" className="px-7 py-3 bg-white uppercase rounded border-black border-2 px-3 py-3 transition duration-300 hover:bg-black hover:text-white">
                            back
                        </button>
                        <button type = "submit" className="ml-3 px-7 py-3 bg-white uppercase rounded  border-black border-2 px-3 py-3 transition duration-300 hover:bg-black hover:text-white">
                            Add
                        </button>
                    </li>
                </ul>          
                
                </form>
            </div>
            </main>

        </body>
  );
}

export default AddMedicine;


