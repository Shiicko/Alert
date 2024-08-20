import { useState } from "react";
import * as s from "./components/AlertStyled";
import Alert from "./components/Alert";

export const App = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const handleShowAlert = () => {
    setAlertMessage("Este es un mensaje de éxito.");
    setAlertType("success");
    setShowAlert(true);
  };

  const handleShowError = () => {
    setAlertMessage("¡Hubo un error!");
    setAlertType("error");
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <s.Button
        onClick={handleShowAlert}
        bgColor="#28a745"
        hoverBgColor="#218838"
      >
        Mostrar Éxito
      </s.Button>
      <s.Button
        onClick={handleShowError}
        bgColor="#dc3545"
        hoverBgColor="#c82333"
        style={{ marginLeft: "10px" }}
      >
        Mostrar Error
      </s.Button>

      {showAlert && (
        <Alert
          message={alertMessage}
          type={alertType}
          isVisible={showAlert}
          onClose={handleCloseAlert}
        />
      )}
    </div>
  );
};
