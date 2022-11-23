import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";
import EmailModalForm from "./EmailModalForm";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface Props {
  open: boolean;
  handleClose: () => void;
  setOpen: (value:boolean) => void;
  setEmailSentMessage: (value: boolean) => void;

}

export default function EmailModal({ open, handleClose, setOpen, setEmailSentMessage }: Props) {
  const MotionBox = motion(Box);

  return (
    <Modal
  
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <MotionBox
        initial={{ x: 150, opacity: 0 }}
        animate={{y:-200, x: -200, opacity: 1 }}
        exit={{ x: 0, opacity: 0 }}
        sx={style}
      >
        <EmailModalForm setOpen = {setOpen} setEmailSentMessage = {setEmailSentMessage} />
      </MotionBox>
    </Modal>
  );
}
