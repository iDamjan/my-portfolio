import classes from "./App.module.scss";
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import { useBackgroundImage } from "./hooks/useBackgroundImage";

function App() {
  const { background } = useBackgroundImage();

  return (
    <div
      className={classes.app}
      style={{ backgroundImage: `url(${background})` }}
    >
      <AnimatedRoutes />
    </div>
  );
}

export default App;
