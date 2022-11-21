import React, { useEffect, useState }from "react";
import { Box, Stack, Typography } from '@mui/material';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Level1 from "./images/level1.svg"
import Level2 from "./images/level2.svg"
import Level3 from "./images/level3.svg"
import Level4 from "./images/level4.svg"
import Level5 from "./images/level5.svg"
import Sunglasses from "./images/sunglasses.svg";
import "./App2.css";


const App = () => {

  return (
<svg version="1.1" x="0px" y="0px" width="1500px" height="360px" viewBox="0 0 15 3.6">
   <path class="white-path animate" d="M1,1c1.6,0,1.6,1.6,3.3,1.6S5.9,1,7.6,1c1.6,0,1.6,1.6,3.3,1.6S12.5,1,14.2,1s1.6,1.6,3.3,1.6 c1.6,0,1.6-1.6,3.3-1.6"/>
</svg>
  );
};

export default App;

const useStyles = makeStyles((theme:Theme) =>

  createStyles({
    Sunglasses: {
      position:"absolute",
      top:"50%",
      left:"50%", 
      transform:"translate(-50%,-50%)", 
      zIndex:1,
    },
    StickyBomb:{
      position:"absolute",
      top:"50%",
      left:"50%",
      transform:"translate(-50%,-50%)"
    },
    VisibleArea:{
      position:"absolute",
      top:"50%",
      left:"50%", 
      transform:"translate(-50%,-50%)", 
      // border:"1px solid red",
      overflow: "hidden",
      zIndex:"10",
      display:"none"
    },
    TextListArea:{
      width:"100%",
      position:"absolute",
      top:"50%",
      left:"50%",
      transform:"translate(-50%,-50%)",
    },
    TextStyle:{
      width:"100%",
      // fontSize: "35px !important",
      fontWeight: "700 !important",
      zIndex:"100 !important",
      color: "#6DFFF6",
      textAlign:"center",
      animation:`$marquee 3s linear infinite`,
      // border:"1px solid blue",
      lettetSpacing:"-0.03em"
      // transform:(props)=>`translateY(${props.count}px)`
    },
    "@keyframes marquee": {
      "0%": {
        transform: "translateY(0)",
      },
      "100%": {
        transform: "translateY(350px)",
      },
    },
  }),
  

 
);
