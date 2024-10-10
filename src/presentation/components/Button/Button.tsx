// ButtonComponent.tsx
import React from 'react';
import { Button, ButtonProps, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { IconType } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';

type ButtonVariant = 'text' | 'outlined' | 'contained';
type ButtonColor = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

interface IconProps {
  iconName: string;
  position?: 'start' | 'end';
}

interface ButtonComponentProps extends Omit<ButtonProps, 'color'> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  icon?: IconProps;
  loading?: boolean;
}

const iconSets: { [key: string]: { [key: string]: IconType } } = {
  Fa: FaIcons,
  Md: MdIcons,
  Ai: AiIcons,
  // Agrega otros conjuntos de iconos si es necesario
};

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  variant = 'contained',
  color = 'primary',
  icon,
  loading = false,
  children,
  ...props
}) => {
  const theme = useTheme();
  const iconColor = theme.palette[color]?.contrastText || '#FFF';

  const Icon = icon ? iconSets[icon.iconName.slice(0, 2)][icon.iconName] : null;

  return (
    <Button
      variant={variant}
      color={color}
      startIcon={icon?.position === 'start' && Icon && !loading ? <Icon size={20} color={iconColor} /> : null}
      endIcon={icon?.position === 'end' && Icon && !loading ? <Icon size={20} color={iconColor} /> : null}
      {...props}
      disabled={props.disabled || loading}
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : children}
    </Button>
  );
};

export default ButtonComponent;


// EJEMPLOS

//<ButtonComponent 
//variant="contained" 
//color="primary" 
//icon={{ iconName: 'FaBeer', position: 'start' }} 
//onClick={() => console.log('Botón con ícono al inicio presionado')}
//>
//¡Salud!
//</ButtonComponent>
//
//
//<ButtonComponent 
//  variant="outlined" 
//  color="secondary" 
//  icon={{ iconName: 'MdSend' }} 
//  onClick={() => console.log('Botón solo con ícono presionado')} 
//  aria-label="Enviar"
//  size="large"
///>
//
//
//<ButtonComponent 
//  variant="text" 
//  color="success" 
//  icon={{ iconName: 'AiOutlineCheck', position: 'end' }} 
//  onClick={() => console.log('Botón con ícono al final presionado')} 
//  loading={true}
//>
//  Guardar
//</ButtonComponent>
//