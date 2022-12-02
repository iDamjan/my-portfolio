import MainContent from "../../components/home-content/MainContent";
import classes from "./HomePage.module.scss";
import { ContactIcons } from "../../components/home-content/contact-icons/ContactIcons";

export default function HomePage() {
  return (
    <div className={classes.container}>
      <ContactIcons />
      <MainContent />
    </div>
  );
}
