import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import classes from "./IntroPage.module.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function BasicButtons() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  };
  const goToSnake = () => {
    navigate("/snakeGame");
  };

  const MotionButton = motion(Button);

  return (
    <Stack className={classes.container} spacing={2} direction={{sm:"row", xs:"column"}}>
      <MotionButton
        animate={{
          scale: [0, 1, 2, 1, 1],
          rotate: [0, -180, 0],
        
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
        onClick={goToSnake}
        className={classes.snake}
        variant="contained"
      >
        Play Snake
      </MotionButton>

      <MotionButton
        animate={{
          scale: [0, 1, 2, 1, 1],
          rotate: [0, 180, 0],
      
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
        onClick={goToHome}
        className={classes.portfolio}
        variant="outlined"
      >
        Portfolio
      </MotionButton>
    </Stack>
  );
}
