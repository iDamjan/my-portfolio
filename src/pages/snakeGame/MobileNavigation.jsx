import React from "react";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import classes from "./mobile-navigation.module.scss";

export const MobileNavigation = () => {

const keyPressDown = () => {
    document.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "down",
          keyCode: 40, 
          code: "KeyE", 
          which: 69,
          shiftKey: false, 
          ctrlKey: false,  
          metaKey: false  
        })
      );
    }
const keyPressUp = () => {
    document.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "up",
          keyCode: 38, 
          code: "KeyE", 
          which: 69,
          shiftKey: false, 
          ctrlKey: false,  
          metaKey: false  
        })
      );
    }
const keyPressLeft = () => {
    document.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "left",
          keyCode: 37, 
          code: "KeyE", 
          which: 69,
          shiftKey: false, 
          ctrlKey: false,  
          metaKey: false  
        })
      );
    }
const keyPressRight = () => {
    document.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "right",
          keyCode: 39, 
          code: "KeyE", 
          which: 69,
          shiftKey: false, 
          ctrlKey: false,  
          metaKey: false  
        })
      );
    }


  return (
    <div className={classes.container}>
      <div className={classes.groupOne}>
        <ArrowCircleUpOutlinedIcon onClick = {keyPressUp}sx = {{fontSize: "inherit"}}/>
      </div>
      <div className={classes.groupTwo}>
        <ArrowCircleLeftOutlinedIcon onClick = {keyPressLeft}/>
        <ArrowCircleDownOutlinedIcon onClick = {keyPressDown} />
        <ArrowCircleRightOutlinedIcon onClick = {keyPressRight}/>
      </div>
    </div>
  );
};


