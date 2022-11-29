import { useEffect } from "react";
import classes from "./SnakeGame.module.scss";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const NavigationButton = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/home");
  };

  return (
    <div className={classes.navigationButton}>
      <Button
        onClick={navigateHandler}
        
        variant="outlined"
      >
        Go to Portfolio
      </Button>
    </div>
  );
};
