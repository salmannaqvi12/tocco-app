import React from "react";

function SecondPage({productData}:any) {
  return (
    
      <div className="bg-white dark:bg-zinc-800 px-[8%] pt-8">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className=" w-screen lg:w-4/12 pt-4 lg:pr-28">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Impact Facts
            </h2>
            <div className="flex flex-col justify-between space-y-10">
            <p className="text-zinc-600 dark:text-zinc-300 mt-2">
              
             {productData?.impactFacts0}
            </p>
            <p className="text-zinc-600 dark:text-zinc-300 mt-2">
            {productData?.impactFacts1}
            </p>
            <p className="text-zinc-600 dark:text-zinc-300 mt-2">
            {productData?.impactFacts2}
            </p>
           
            <div className="mt-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            </div>
          </div>
          <div className=" lg:mr-[8%]">
            <div className="flex justify-center items-center">
            {
              <img
                src={productData?.productImage ||"https://placehold.co/600x400"}
                alt="Central Image"
                className=" rounded-lg shadow-lg "
                style={{width:"600px", height:"400px"}}
              ></img>
            }
            </div>
          </div>
          <div className="w-screen lg:w-1/3 p-4">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Product Info
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 mt-2">
             {productData?.productInfo}
            </p>
          </div>
        </div>
      </div>
  );
}

export default SecondPage;
