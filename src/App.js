import React, { useEffect, useState }from "react";
import { Box, Stack, Typography } from '@mui/material';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Level1 from "./images/level1.svg"
import Level2 from "./images/level2.svg"
import Level3 from "./images/level3.svg"
import Level4 from "./images/level4.svg"
import Level5 from "./images/level5.svg"
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
        return  <img src={Level1} alt="" width={919*0.5} height={1105*0.5} className={classes.StickyBomb} />
        break;
      case 1:
        return  <img src={Level2} alt="" width={919*0.5} height={1105*0.5} className={classes.StickyBomb} />
        break;
      case 2:
        return  <img src={Level3} alt="" width={919*0.5} height={1105*0.5} className={classes.StickyBomb} />
        break;
      case 3:
        return  <img src={Level4} alt="" width={919*0.5} height={1105*0.5} className={classes.StickyBomb} />
        break;
      case 4:
        return  <img src={Level5} alt="" width={919*0.5} height={1105*0.5} className={classes.StickyBomb} />
        break;
      default:  
        return  <img src={Level1} alt="" width={919*0.5} height={1105*0.5} className={classes.StickyBomb} />
        break;
    }
  }

  const slotMachineData = [
    "안녕하세요",
    "제 이름은 권해원입니다",
    "프론트엔드 개발자입니다",
    "귀엽습니다",
    "그럼 이만 안뇽><",
  ]   


  const classes = useStyles({count});
  return (
    <Box style={{ width: "1920px", margin: "0 auto" }}>
      <Stack>
        <img
          src={Sunglasses}
          width={1488 * 0.35}
          height={523 * 0.35}
          alt=""
          className={classes.Sunglasses}
        />
      </Stack>
      <Stack>{renderStickyBomb()}</Stack>
      <Stack className={classes.TextListArea}>
        {slotMachineData.map((item, index) => (
          <Typography className={classes.TextStyle}>
            {item}
          </Typography>
        ))}
      </Stack>
    </Box>
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
      zIndex:1
    },
    StickyBomb:{
      position:"absolute",
      top:"50%",
      left:"50%",
      transform:"translate(-50%,-50%)"
    },
    TextListArea:{
      position:"absolute",
      top:"50%",
      left:"50%",
      transform:"translate(-50%,-50%)",
      zIndex:2,
      border:"1px solid red"
    },
    TextStyle:{
      fontSize: "50px !important",
      fontWeight: "700 !important",
      color: "#6DFFF6",
      textAlign:"center",
      transform:(props)=>`translateY(${props.count}px)`
    }
  })

 
);
