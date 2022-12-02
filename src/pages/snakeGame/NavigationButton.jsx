import classes from "./SnakeGame.module.scss";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const NavigationButton = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.navigationButton}>
      <Button onClick={() => navigate("/home")} variant="outlined">
        Go to Portfolio
      </Button>
    </div>
  );
};
