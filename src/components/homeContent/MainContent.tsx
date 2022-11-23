import classes from "./MainContent.module.scss";
import Button from "@mui/material/Button";
import OpenHtmlTag from "../../static/OpenHtmlTag.svg";
import CloseHtmlTag from "../../static/CloseHtmlTag.svg";
import EmailModal from "./EmailModal/EmailModal";
import { useState } from "react";
import Alert from "@mui/material/Alert";

export default function MainContent() {
  const [open, setOpen] = useState(false);
  const [emailSentMessage, setEmailSentMessage] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {emailSentMessage && <Alert severity="success">Email Sent!</Alert>}
      <div className={classes.container}>
        <EmailModal
          setEmailSentMessage={setEmailSentMessage}
          open={open}
          setOpen={setOpen}
          handleClose={handleClose}
        />
        <img src={OpenHtmlTag} alt="Open Html Tag" />
        <h1>I'M DAMJAN STOJANOVSKI</h1>
        <h3>
          Junior Frontend <span>Web Developer</span>
        </h3>
        <Button
          onClick={handleOpen}
          className={classes.button}
          variant="contained"
        >
          Contact Me
        </Button>
        <img
          className={classes.closeTag}
          src={CloseHtmlTag}
          alt="Close Html Tag"
        />
      </div>
    </>
  );
}
