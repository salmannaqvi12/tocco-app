import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function FirstPage({ productData }: any) {
  return (
    <div className="w-screen overflow-x-hidden ">
      <div className="w-screen pt-6">
        <div className="px-[5%] flex w-screen lg:flex-row flex-col">
          <div className="w-screen lg:w-8/12 flex lg:flex-row flex-col">
            <div className="w-screen lg:w-8/12 flex items-end justify-around   pb-4 pr-8">
              <div className="flex flex-col justify-center items-center w-20 space-y-2">
                <p className="text-sm text-center">Total Carbon Fooprint</p>

                <div
                  style={{
                    backgroundColor: " rgb(255,255,255)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(249,255,0,0.7203256302521008) 100%)",
                  }}
                  className=" rounded-full w-14 h-20 "
                ></div>
                <p className="text-sm">{productData?.totalCarbonFootprint}</p>
              </div>
              <div className="flex flex-col justify-center items-center w-20 space-y-2">
                <p className="text-sm text-center">Reduction Targets</p>

                <div
                  style={{
                    backgroundColor: " rgb(255,255,255)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(249,255,0,0.7203256302521008) 100%)",
                  }}
                  className=" rounded-full w-14 h-20 "
                ></div>
                <p className="text-sm text-center">
                  {productData?.reductionTargets}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-20 space-y-2">
                <p className="text-sm text-center">Reduction Achievements</p>

                <div
                  style={{
                    backgroundColor: " rgb(255,255,255)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(249,255,0,0.7203256302521008) 100%)",
                  }}
                  className=" rounded-full w-14 h-20 "
                ></div>
                <p className="text-sm text-center invisible">
                  {productData?.reductionAchievements}
                </p>
              </div>
              <div className="ml-0 lg:ml-12 flex">
                <div className="flex flex-col justify-center items-center w-20 space-y-2 ">
                  <p className="text-sm text-center">
                    CONVENTIONAL <b>LEATHER</b>
                  </p>

                  <div
                    style={{
                      backgroundColor: " rgb(255,255,255)",
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,1) 2%, rgba(140,28,45,0.969625350140056) 95%)",
                    }}
                    className=" rounded-full w-14 h-20 "
                  ></div>
                  <p className="text-sm">{productData?.conventionalLeather}</p>
                </div>
                <p className="w-28 pl-6 leading-4 text-sm hidden lg:block">
                  you agree to the storing of oring of cookies on your device
                  you agree.
                </p>
              </div>
            </div>
            <div className="w-screen lg:w-4/12 justify-around lg:justify-none flex space-x-6">
              <div className="flex flex-col justify-center space-y-6 items-center">
                <p className="text-sm font-bold">Bio Based Content</p>
                <div>
                  <CircularProgressbar
                     value={productData?.bioBasedContent}
                     text={`${productData?.bioBasedContent}%`}
                    styles={{
                      root: { width: 80 },
                      path: { stroke: "#32CD32" }, // Change color here
                      text: { fill: "#32CD32", fontSize: "16px" }, // Change color and font size of text here
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-6 items-center">
                <p className="text-sm font-bold">Waste Reduction</p>
                <div>
                  <CircularProgressbar
                    value={productData?.wasteReduction}
                    text={`${productData?.wasteReduction}%`}
                    styles={{
                      root: { width: 80 },
                      path: { stroke: "#32CD32" }, // Change color here
                      text: { fill: "#32CD32", fontSize: "16px" }, // Change color and font size of text here
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 w-screen lg:w-4/12">
            <p className="pt-6 px-6 text-2xl font-bold">Certificate</p>
            <div className="flex py-6 justify-around ">
              {productData?.certifications?.map(
                (certificate: string, index: number) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center space-y-3"
                  >
                    <div>
                      <img
                        src="https://img.freepik.com/premium-vector/3d-icon-user-profile-convex-volume-shape-person-circle_348818-1116.jpg"
                        className="w-20 h-20"
                        alt="Certificate Icon"
                      />
                    </div>
                    <a
                      href={certificate}
                      download
                      className="py-1 px-5 bg-black text-white text-sm"
                    >
                      <i className="fa fa-file pr-2"></i>
                      Download
                    </a>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="px-[5%] flex w-screen flex-col lg:flex-row">
          <div className="w-full lg:w-8/12 flex flex-col justify-between">
            <div className="w-full flex lg:flex-row flex-col">
              <div className="w-full lg:w-8/12 flex items-start justify-around pt-8 lg:pb-4 pr-8">
                <div className="flex flex-col justify-center items-center w-20 space-y-2">
                  <p className="text-sm text-center">Total Water Consumption</p>

                  <div
                    style={{
                      backgroundColor: "rgb(151,152,233)",
                      background:
                        "linear-gradient(0deg, rgba(151,152,233,1) 1%, rgba(218,223,231,0.969625350140056) 80%)",
                      // boxShadow: "10px 0px 10px rgba(0, 0, 0, 0.1)"
                    }}
                    className=" rounded-full w-14 h-20 "
                  ></div>
                  <p className="text-sm">
                    {productData?.totalWaterConsumption}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center w-20 space-y-2">
                  <p className="text-sm text-center">Water Recycled</p>

                  <div
                    style={{
                      backgroundColor: "rgb(151,152,233)",
                      background:
                        "linear-gradient(0deg, rgba(151,152,233,1) 1%, rgba(218,223,231,0.969625350140056) 80%)",
                      // boxShadow: "10px 0px 10px rgba(0, 0, 0, 0.1)"
                    }}
                    className=" rounded-full w-14 h-20 "
                  ></div>
                  <p className="text-sm">{productData?.recylability}</p>
                </div>
                <div className="flex flex-col justify-center items-center w-20 space-y-2">
                  <p className="text-sm text-center">Reduction Achievements</p>

                  <div
                    style={{
                      backgroundColor: "rgb(151,152,233)",
                      background:
                        "linear-gradient(0deg, rgba(151,152,233,1) 1%, rgba(218,223,231,0.969625350140056) 80%)",
                      // boxShadow: "10px 0px 10px rgba(0, 0, 0, 0.1)"
                    }}
                    className=" rounded-full w-14 h-20 "
                  ></div>
                  <p className="text-sm">
                    {productData?.reductionAchievements}
                  </p>
                </div>
                <div className="ml-0 lg:ml-12 flex">
                  <div className="flex flex-col justify-center items-center w-20 space-y-2 ">
                    <p className="text-sm text-center">
                      CONVENTIONAL <b>LEATHER</b>
                    </p>

                    <div
                      style={{
                        backgroundColor: " rgb(255,255,255)",
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,1) 2%, rgba(140,28,45,0.969625350140056) 95%)",
                      }}
                      className=" rounded-full w-14 h-20 "
                    ></div>
                    <p className="text-sm">
                      {productData?.conventionalLeather}
                    </p>
                  </div>
                  <p className="w-28 pl-6 leading-4 text-sm hidden lg:block">
                    you agree to the storing of oring of cookies on your device
                    you agree.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-4/12">
                <p className="my-2 font-bold">Recylability</p>
                <p className="my-1">mechanical</p>
                <div className="w-[87%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-[#32CD32] h-2.5 rounded-full"
                    style={{ width: `${productData?.mechanical}%`, marginRight: "10px" }}
                  ></div>
                </div>
                <p className="my-1">chemical</p>
                <div className="w-[87%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-[#32CD32] h-2.5 rounded-full"
                    style={{ width:  `${productData?.chemical}%`, marginRight: "10px" }}
                  ></div>
                </div>
                <p className="my-1">naturalcomposable</p>
                <div className="w-[87%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-[#32CD32] h-2.5 rounded-full"
                    style={{ width: `${productData?.naturalComposable}%`, marginRight: "10px" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center bg-slate-100 space-x-4 mx-2 md:mx-10 py-4 mt-4">
              <div className="flex flex-col justify-center items-center w-20 space-y-4">
                <div
                  style={{
                    backgroundColor: " rgb(255,255,255)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(249,255,0,0.7203256302521008) 100%)",
                  }}
                  className=" rounded-full w-10 h-16 "
                ></div>
                <p className="text-sm">
                {productData?.m1}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-20 space-y-4">
                <div
                  style={{
                    backgroundColor: " rgb(255,255,255)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(249,255,0,0.7203256302521008) 100%)",
                  }}
                  className=" rounded-full w-10 h-16 "
                ></div>
                <p className="text-sm">
                {productData?.m2}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-20 space-y-4">
                <div
                  style={{
                    backgroundColor: " rgb(255,255,255)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(249,255,0,0.7203256302521008) 100%)",
                  }}
                  className=" rounded-full w-10 h-16 "
                ></div>
                <p className="text-sm">
                {productData?.m3}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-20 space-y-4">
                <div
                  style={{
                    backgroundColor: "rgb(151,152,233)",
                    background:
                      "linear-gradient(0deg, rgba(151,152,233,1) 1%, rgba(218,223,231,0.969625350140056) 80%)",
                    // boxShadow: "10px 0px 10px rgba(0, 0, 0, 0.1)"
                  }}
                  className=" rounded-full w-10 h-16 "
                ></div>
                <p className="text-sm">
                {productData?.m4}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-20 space-y-4">
                <div
                  style={{
                    backgroundColor: "rgb(151,152,233)",
                    background:
                      "linear-gradient(0deg, rgba(151,152,233,1) 1%, rgba(218,223,231,0.969625350140056) 80%)",
                    // boxShadow: "10px 0px 10px rgba(0, 0, 0, 0.1)"
                  }}
                  className=" rounded-full w-10 h-16 "
                ></div>
                <p className="text-sm">
                 {productData?.m5}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-20 space-y-4">
                <div
                  style={{
                    backgroundColor: " rgb(255,255,255)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(249,255,0,0.7203256302521008) 100%)",
                  }}
                  className=" rounded-full w-10 h-16 "
                ></div>
                <p className="text-sm">
                {productData?.m6}
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full lg:w-4/12 mt-[10%]">
            <p className=" lg:pt-6 px-6 text-2xl font-bold">Attachments</p>
            <p className="pt-5 px-6 ">Product Catalogue & Impact Report</p>
            <div className="flex flex-wrap py-6 justify-start gap-4 px-3 ">
            {productData?.attachments?.map(
                (certificate: string, index: number) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center space-y-3"
                  >
                    <div>
                      <img
                        src="https://img.freepik.com/premium-vector/3d-icon-user-profile-convex-volume-shape-person-circle_348818-1116.jpg"
                        className="w-20 h-20"
                        alt="Certificate Icon"
                      />
                    </div>
                    <a
                      href={certificate}
                      download
                      className="py-1 px-5 bg-black text-white text-sm"
                    >
                      <i className="fa fa-file pr-2"></i>
                      Download
                    </a>
                  </div>
                )
              )}
            </div>
            <p className="px-6 ">LCA</p>
            {productData?.lca?.map(
                (LVOR: string, index: number) => (
            <a
             href={LVOR} 
             download 
             className="py-1 mx-3 px-5 bg-black text-white text-sm">
              <i className="fa fa-file pr-2"></i>
              LVOR LCA 2024
            </a>
                ))}
          </div>
        </div>
      </div>
      <p className="w-screen lg:w-8/12 px-[9%] text-gray-400 mt-2">
       {productData?.lcaDescription}
      </p>
    </div>
  );
}
export default FirstPage;
