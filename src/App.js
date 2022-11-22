import React, { useEffect, useState }from "react";
import SunglassesBorder from "./images/sss.svg";
import SunglassesLense from "./images/sunglasses-lense.svg";

const App = () => {
  const height=300
  const width=50
  return (
    <div
      style={{
        position:"relative",
        width:"100%",
        height:"300px"
      }}
    >
      <img
          src={SunglassesBorder}
          alt=""
          objectFit="contain"
          style={{ position:"absolute",top:0,left:0, zIndex:1}}
        />
      <img
          src={SunglassesLense}
          alt=""
          objectFit="contain"
          style={{ position:"absolute",top:45, left:0}}
        />
    </div>
  )
}

export default App;



