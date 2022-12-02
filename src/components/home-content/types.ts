export interface inputTypes {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface inputTouchedStateTypes {
  name: boolean;
  email: boolean;
  subject: boolean;
  message: boolean;
}

export interface Props {
  setOpen: (value: boolean) => void;
  setPopupMessage: (value: {
    message: string;
    messageSuccess: boolean;
    severity: string;
  }) => void;
}

export interface PopupMessage {
  message: string;
  messageSuccess: boolean;
  severity: any;
}

export interface emailModalProps {
  open: boolean;
  handleClose: () => void;
  setOpen: (value: boolean) => void;
  setPopupMessage: (value: {
    message: string;
    messageSuccess: boolean;
    severity: string;
  }) => void;
}