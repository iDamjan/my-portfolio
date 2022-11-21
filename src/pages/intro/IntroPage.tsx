import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import classes from "./IntroPage.module.scss";
import { useNavigate } from "react-router-dom";

export default function BasicButtons() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/Home");
  };
  const goToSnake = () => {
    navigate("/snakeGame");
  };

  return (
    <Stack className={classes.container} spacing={2} direction="row">
      <Button onClick={goToSnake} className={classes.snake} variant="contained">
        Play Snake
      </Button>

      <Button
        onClick={goToHome}
        className={classes.portfolio}
        variant="outlined"
      >
        Portfolio
      </Button>
    </Stack>
  );
}
