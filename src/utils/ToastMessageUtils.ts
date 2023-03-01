import { useMainStore } from "../store";

export const setErrorMessage = (message: string) => {
  setToastMessage(message, "error");
};

export const setSuccessMessage = (message: string) => {
  setToastMessage(message, "success");
};

export const setWarningMessage = (message: string) => {
  setToastMessage(message, "warning");
};

const setToastMessage = (message: string, severity: string) => {
  const store = useMainStore();
  store.toastMessage = { message: message, severity: severity };
};
