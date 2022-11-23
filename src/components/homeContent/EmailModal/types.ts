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
  setOpen:(value:boolean) => void;
  setEmailSentMessage:(value: boolean) => void;
}