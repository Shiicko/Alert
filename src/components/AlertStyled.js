import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

// Estilos para la alerta
export const AlertWrapper = styled.div`
  padding: 16px 24px;
  margin: 20px auto;
  border-radius: 12px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  border: 1px solid ${(props) => props.borderColor};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  animation: ${(props) => (props.fadingOut ? fadeOut : fadeIn)} 0.5s ease-out;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-out;
  position: relative;
  font-size: 16px;
  line-height: 1.5;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => props.textColor};
  transition: color 0.3s ease;
  margin-left: 15px;

  &:hover {
    color: ${(props) => props.hoverColor};
  }
`;

export const Emoji = styled.span`
  font-size: 20px;
  margin-right: 10px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.bgColor || "#007bff"};
  color: ${(props) => props.textColor || "#fff"};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.hoverBgColor || "#0056b3"};
  }
`;
