import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import classes from "./IntroPage.module.scss";

export default function BasicButtons() {
  return (
    <Stack className={classes.container} spacing={2} direction="row">
      <Button href="/SnakeGame" className={classes.snake} variant="contained">
        Play Snake
      </Button>

      <Button href="/home" className={classes.portfolio} variant="outlined">
        Portfolio
      </Button>
    </Stack>
  );
}
