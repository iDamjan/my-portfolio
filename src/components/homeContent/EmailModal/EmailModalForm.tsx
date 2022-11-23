import TextField from "@mui/material/TextField";
import classes from "./EmailModalForm.module.scss";
import Button from "@mui/material/Button";
import { useState, useRef } from "react";
import { invalidEmail, invalidTextInput } from "./validators";
import { inputTypes, inputTouchedStateTypes, Props } from "./types";
import emailjs from "@emailjs/browser";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const EmailModalForm = ({ setOpen, setEmailSentMessage }: Props) => {
  const form: any = useRef();

  const [isLoading, setIsLoading] = useState(false);

  const [inputs, setInputs] = useState<inputTypes>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [inputsTouched, setInputTouched] = useState<inputTouchedStateTypes>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_n9811ig",
        "template_nmlhgft",
        form.current,
        "zt3u6WoRZnKm_ao94"
      )
      .then(
        () => {
          setOpen(false);
          setEmailSentMessage(true);
          setTimeout(() => {
            setEmailSentMessage(false);
          }, 1500);
          setIsLoading(false);
        },
        (error) => {
          alert("Can not send email, please try again" + error.text);
        }
      );
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const inputTouchedHandler = (e: any) => {
    setInputTouched((prevInputsTouched) => ({
      ...prevInputsTouched,
      [e.target.name]: true,
    }));
  };

  const nameInputInvalid: boolean =
    invalidTextInput(inputs.name) && inputsTouched.name;
  const subjectInputInvalid: boolean =
    invalidTextInput(inputs.subject) && inputsTouched.subject;
  const emailInputInvalid: boolean =
    invalidEmail(inputs.email) && inputsTouched.email;
  const messageInputInvalid: boolean =
    invalidTextInput(inputs.message) && inputsTouched.message;

  const formIsInvalid =
    !invalidTextInput(inputs.name) &&
    !invalidTextInput(inputs.subject) &&
    !invalidTextInput(inputs.message) &&
    !invalidEmail(inputs.email);

  return (
    <form ref={form} onSubmit={sendEmail} className={classes.container}>
      {isLoading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress sx={{ color: "#fa163f" }} />
        </Box>
      ) : (
        <>
          <TextField
            error={nameInputInvalid}
            value={inputs.name}
            name="name"
            onChange={inputHandler}
            fullWidth
            id="fullWidth"
            label="Full Name"
            variant="filled"
            margin="dense"
            onBlur={inputTouchedHandler}
          />
          <TextField
            error={emailInputInvalid}
            onChange={inputHandler}
            value={inputs.email}
            name="email"
            fullWidth
            id="standard-basic"
            label="Enter your email"
            variant="filled"
            margin="dense"
            onBlur={inputTouchedHandler}
          />
          <TextField
            error={subjectInputInvalid}
            onChange={inputHandler}
            value={inputs.subject}
            name="subject"
            fullWidth
            id="standard-basic"
            label="Subject"
            variant="filled"
            margin="dense"
            onBlur={inputTouchedHandler}
          />
          <TextField
            error={messageInputInvalid}
            onChange={inputHandler}
            value={inputs.message}
            name="message"
            id="filled-textarea"
            label="Message"
            placeholder="Placeholder"
            multiline
            variant="filled"
            fullWidth
            margin="dense"
            onBlur={inputTouchedHandler}
          />
          <Button
            disabled={!formIsInvalid}
            type="submit"
            className={classes.dwdw}
          >
            Send Email
          </Button>
        </>
      )}
    </form>
  );
};

export default EmailModalForm;
