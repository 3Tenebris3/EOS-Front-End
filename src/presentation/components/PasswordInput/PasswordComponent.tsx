// PasswordFieldComponent.tsx
import React, { useState } from 'react';
import { InputAdornment, IconButton, Tooltip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import TextFieldComponent from '../TextField/TextFieldComponent';

interface PasswordFieldComponentProps {
  label?: string;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  errorMessage?: string;
  helperText?: string;
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
  variant?: 'standard' | 'outlined' | 'filled';
}

const PasswordFieldComponent: React.FC<PasswordFieldComponentProps> = ({
  label = "Contraseña",
  color = 'primary',
  errorMessage,
  helperText,
  loading = false,
  fullWidth = true,
  className,
  variant,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Obtener el color del tema para el ícono
  const iconColor = theme.palette[color]?.main || theme.palette.primary.main;

  return (
    <TextFieldComponent
      label={label}
      color={color}
      errorMessage={errorMessage}
      helperText={helperText}
      loading={loading}
      fullWidth={fullWidth}
      className={className}
      variant={variant}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Tooltip title={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}>
              <IconButton onClick={togglePasswordVisibility} edge="end">
                {showPassword ? <AiFillEyeInvisible color={iconColor} /> : <AiFillEye color={iconColor} />}
              </IconButton>
            </Tooltip>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default PasswordFieldComponent;
