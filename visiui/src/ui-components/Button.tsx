import React from 'react';

interface ButtonProps {
  text: string;
  
  type?: 'button' | 'submit' | 'reset';
  
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;

  color?: string;
  backgroundColor?: string;
  padding?: string;
  margin?: string;
  border?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
  width?: string;
  height?: string;
  cursor?: 'pointer' | 'default' | 'not-allowed';
  
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    text,
    type = 'button',
    onClick,
    onMouseEnter,
    onMouseLeave,
    color,
    backgroundColor,
    padding,
    margin,
    border,
    borderRadius,
    fontSize,
    fontWeight,
    width,
    height,
    cursor,
    disabled = false
  } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
      style={{
        color,
        backgroundColor,
        padding,
        margin,
        border,
        borderRadius,
        fontSize,
        fontWeight,
        width,
        height,
        cursor: disabled ? 'not-allowed' : cursor,
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
