import React, { useState } from "react";

export const useAlert = () => {
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: "",
  });

  const showAlert = (message, severity) => {
    setAlertState((prevState) => ({
      ...prevState,
      open: true,
      message,
      severity,
    }));
  };

  const handleClose = () => {
    setAlertState((prev) => ({
      ...prev,
      open: false,
      message: "",
      severity: "",
    }));
  };

  return {
    ...alertState,
    showAlert,
    handleClose,
  };
};
