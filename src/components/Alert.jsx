/* eslint-disable react/prop-types */
import * as s from "./AlertStyled";
import { useEffect, useState } from "react";

const getAlertStyles = (messageType) => {
  switch (messageType) {
    case "success":
      return {
        bgColor: "#56ae57", // Verde
        textColor: "#ffffff",
        borderColor: "#4c8c4a",
        hoverColor: "#45a049",
        emoji: "😊",
      };
    case "error":
      return {
        bgColor: "#721c24", // Rojo
        textColor: "#ffffff",
        borderColor: "#6c1e1b",
        hoverColor: "#5a1b1b",
        emoji: "😢",
      };
    default:
      return {};
  }
};

const Alert = ({ message, type, isVisible, onClose }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const { bgColor, textColor, borderColor, hoverColor, emoji } =
    getAlertStyles(type);

  useEffect(() => {
    if (!isVisible) {
      setIsFadingOut(true);
      const timer = setTimeout(() => {
        onClose();
        setIsFadingOut(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <s.AlertWrapper
      bgColor={bgColor}
      textColor={textColor}
      borderColor={borderColor}
      isVisible={isVisible || isFadingOut}
      type={type}
      fadingOut={isFadingOut}
    >
      <s.Emoji>{emoji}</s.Emoji>
      <span>{message}</span>
      <s.CloseButton
        textColor={textColor}
        hoverColor={hoverColor}
        onClick={() => {
          setIsFadingOut(true);
          const timer = setTimeout(() => {
            onClose();
            setIsFadingOut(false);
          }, 500);
          return () => clearTimeout(timer);
        }}
      >
        &times;
      </s.CloseButton>
    </s.AlertWrapper>
  );
};

export default Alert;
