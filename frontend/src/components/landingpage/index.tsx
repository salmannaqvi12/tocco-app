import SecondPage from './secondPage';
import FirstPage from './firstPage';
import React, { useEffect, useState } from "react";

function LandingPage({productData}:any) {
    return (

    <div className='overflow-hidden'>
        <FirstPage productData = {productData}/>
        <SecondPage productData = {productData}/>
    </div>
  )
}



const MiniLoader = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {/* <div
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        left: "50%",
        top: "50%",
      }}
    >
      <ThreeCircles
        height="40"
        width="40"
        color="#ff8d0b"
        visible={true}
        ariaLabel="three-circles-rotating"
      />
    </div> */}
    </div>
  );
};




export default LandingPage;
