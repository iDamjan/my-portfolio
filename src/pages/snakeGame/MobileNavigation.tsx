import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import classes from "./mobile-navigation.module.scss";

export const MobileNavigation = () => {

  const onKeyPress = (keyName:string, keyCode:number) => {
    document.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: keyName,
        keyCode: keyCode,
        code: "KeyE",
        which: 69,
        shiftKey: false,
        ctrlKey: false,
        metaKey: false,
      })
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.groupOne}>
        <ArrowCircleUpOutlinedIcon
          onClick={() => onKeyPress("up", 38)}
          sx={{ fontSize: "inherit" }}
        />
      </div>
      <div className={classes.groupTwo}>
        <ArrowCircleLeftOutlinedIcon onClick={() => onKeyPress("left", 37)} />
        <ArrowCircleDownOutlinedIcon onClick={() => onKeyPress("down", 40)} />
        <ArrowCircleRightOutlinedIcon onClick={() => onKeyPress("right", 39)} />
      </div>
    </div>
  );
};
