import React from "react";
import ButtonStyled from "@styles/ui/ButtonStyled";

interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return <ButtonStyled {...props}>{label}</ButtonStyled>;
};

export default Button;
