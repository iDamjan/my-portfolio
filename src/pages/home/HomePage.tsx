import MainContent from "../../components/homeContent/MainContent";
import classes from "./HomePage.module.scss";
import { ContactIcons } from "../../components/homeContent/contact-icons/ContactIcons";

export default function HomePage() {
  return (
    <div className={classes.container}>
      <ContactIcons />
      <MainContent />
    </div>
  );
}
