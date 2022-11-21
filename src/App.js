import React, { useEffect, useState }from "react";
import { Box, Stack, Typography } from '@mui/material';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Level1 from "./images/level1.svg"
import Level2 from "./images/level2.svg"
import Level3 from "./images/level3.svg"
import Level4 from "./images/level4.svg"
import Level5 from "./images/level5.svg"
import SunglassesFront from "./images/sunglass-front.svg"
// import { ReactCompomnent as Level1 } from "./images/Level1.svg"
import Sunglasses from "./images/sunglasses.svg";


const App = () => {

  const [count, setCount ]= useState(0)
  const level=(count%5+1)
  useEffect(()=>{
    const timer = setInterval(()=>{
      setCount(count=>count+1)
    },150);
    return () =>clearInterval(timer)
  },[])

  const renderStickyBomb =()=>{
    switch(level){
      case 0:
        return  <img src={Level1} alt="" width={919} height={1105} className={classes.StickyBomb} />
        break;
      case 1:
        return  <img src={Level2} alt="" width={919} height={1105} className={classes.StickyBomb} />
        break;
      case 2:
        return  <img src={Level3} alt="" width={919} height={1105} className={classes.StickyBomb} />
        break;
      case 3:
        return  <img src={Level4} alt="" width={919} height={1105} className={classes.StickyBomb} />
        break;
      case 4:
        return  <img src={Level5} alt="" width={919} height={1105} className={classes.StickyBomb} />
        break;
      default:  
        return  <img src={Level1} alt="" width={919} height={1105} className={classes.StickyBomb} />
        break;
    }
  }

  const slotMachineData = [
    "안녕하세요",
    "글자수는최대열다섯글자입니다냥",
    "프론트엔드 개발자입니다",
    "텍스트4444",
    "그럼 이만 안뇽><",
    "안녕하세요",
    "글자수는 최대 열다섯글자",
    "프론트엔드 개발자입니다",
    "텍스트4444",
    "그럼 이만 안뇽><",
  ]   

  console.log(count,"count")

  const classes = useStyles({count});
  return (
    <Stack alignItems="center" style={{border:"1px solid blue"}}>
      <Stack alignItems="center">
        <img
          src={Sunglasses}
          width={1488 }
          height={523 }
          alt=""
          className={classes.Sunglasses}
        />
      </Stack>
      {/* <Stack style={{marginLeft:"-50px", marginTop:"20px"}}> */}

        <Stack className={classes.TextListArea}>
          {slotMachineData.map((item, index) => (
            <Typography className={classes.TextStyle} style={{fontSize:item.length<=12?"135px":"105px"}}>{item}</Typography>
          ))}
        </Stack>
      {/* </Stack> */}
    </Stack>
  );
};

export default App;

const useStyles = makeStyles((theme:Theme) =>

  createStyles({
    Sunglasses: {
      position:"absolute",
      border:"1px solid red",
      transform:"scale(0.5)",
      top:"0",
      left:"0",
      // top:"50%",
      // left:"50%", 
      // transform:"translate(-50%,-50%)", 
      zIndex:1,
    },
    // StickyBomb:{
    //   position:"absolute",
    //   top:"50%",
    //   left:"50%",
    //   transform:"translate(-50%,-50%)"
    // },
  
    TextListArea:{
      clipPath:`path("M714.5 322.783C680.921 324.086 618.551 335.525 589.207 374.155C584.39 381.124 580.245 387.968 576.26 394.547C560.804 420.066 547.753 441.615 507.207 451.155C456.707 462.655 294.707 481.655 179.207 454.655C143.207 446.155 96.7069 435.155 77.2069 403.155C57.7069 371.155 20.7069 309.655 8.70691 222.155C8.17569 216.872 7.6584 211.788 7.15967 206.886C-0.791014 128.743 -4.02406 96.9675 16.2069 46.1549C18.7164 42.7898 20.9852 39.5809 23.1358 36.5393C39.8381 12.9162 49.4066 -0.616989 109.207 1.15487C163.207 2.75487 384.707 1.82154 488.707 1.15487H721.707V1.5H947.5C1051.5 2.16666 1273 3.1 1327 1.5C1386.8 -0.271866 1396.37 13.2613 1413.07 36.8844C1415.22 39.9261 1417.49 43.135 1420 46.5C1440.23 97.3127 1437 129.088 1429.05 207.231C1428.55 212.133 1428.03 217.217 1427.5 222.5C1415.5 310 1378.5 371.5 1359 403.5C1339.5 435.5 1293 446.5 1257 455C1141.5 482 979.5 463 929 451.5C888.454 441.96 875.403 420.411 859.947 394.892C855.962 388.313 851.817 381.469 847 374.5C815.4 332.9 745.5 322.833 714.5 323V322.783Z")`,
      textAlign:"center",
      zIndex:"1000000 !important",
      transform:"scale(0.5)",
      position:"absolute",
      top:"-35%",
      left:"2.2%"

    },

    TextStyle:{
      fontWeight: "700 !important",
      zIndex:"100 !important",
      color: "#6DFFF6",
      textAlign:"center",
      animation:`$marquee 0.3s linear infinite`,
      lettetSpacing:"-0.03em",
      textShadow: "0 0 2.5px #fff, 0 0 5px #fff, 0 0 7.5px #58b3b5, 0 0 10px #58b3b5, 0 0 12.5px #58b3b5, 0 0 15px #58b3b5, 0 0 17.5px #58b3b5",
 


    },
    "@keyframes marquee": {
      "0%": {
        transform: "translateY(-700px)",
      },
      "100%": {
        transform: "translateY(0px)",
      },
    },
  }),
  

 
);
