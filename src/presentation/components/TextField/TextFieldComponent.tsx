// TextFieldComponent.tsx
import React from 'react';
import { TextField, TextFieldProps, CircularProgress, InputAdornment, Tooltip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { IconType } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';

type TextFieldColor = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

interface IconProps {
  iconName: string;
  position?: 'start' | 'end';
  tooltip?: string;
}

interface TextFieldComponentProps extends Omit<TextFieldProps, 'color'> {
  color?: TextFieldColor;
  icon?: IconProps;
  loading?: boolean;
  errorMessage?: string;
  helperText?: string;
  showValidationIcon?: boolean;
}

const iconSets: { [key: string]: { [key: string]: IconType } } = {
  Fa: FaIcons,
  Md: MdIcons,
  Ai: AiIcons,
  // Agrega otros conjuntos de iconos si es necesario
};

const TextFieldComponent: React.FC<TextFieldComponentProps> = ({
  color = 'primary',
  icon,
  loading = false,
  errorMessage,
  helperText,
  showValidationIcon = false,
  ...props
}) => {
  const theme = useTheme();
  const iconColor = theme.palette[color]?.main || '#000';
  const error = Boolean(errorMessage);

  const Icon = icon ? iconSets[icon.iconName.slice(0, 2)][icon.iconName] : null;

  return (
    <TextField
      color={color}
      error={error}
      helperText={error ? errorMessage : helperText}
      InputProps={{
        startAdornment: icon?.position === 'start' && Icon && !loading ? (
          <InputAdornment position="start">
            <Tooltip title={icon.tooltip || ''}>
              <Icon size={20} color={iconColor} />
            </Tooltip>
          </InputAdornment>
        ) : undefined,
        endAdornment: (
          <>
            {loading ? (
              <InputAdornment position="end">
                <CircularProgress size={20} />
              </InputAdornment>
            ) : (
              <>
                {showValidationIcon && !error && (
                  <InputAdornment position="end">
                    <Tooltip title="Valid">
                      <AiIcons.AiOutlineCheck size={20} color={theme.palette.success.main} />
                    </Tooltip>
                  </InputAdornment>
                )}
                {icon?.position === 'end' && Icon ? (
                  <InputAdornment position="end">
                    <Tooltip title={icon.tooltip || ''}>
                      <Icon size={20} color={iconColor} />
                    </Tooltip>
                  </InputAdornment>
                ) : null}
              </>
            )}
          </>
        ),
      }}
      {...props}
    />
  );
};

export default TextFieldComponent;

//EJEMPLOS

//<TextFieldComponent 
//  label="Buscar" 
//  variant="outlined" 
//  color="info" 
//  icon={{ iconName: 'FaSearch', position: 'start', tooltip: 'Buscar elemento' }} 
//  onChange={(e) => console.log(e.target.value)}
///>
//
//<TextFieldComponent 
//  label="Cargando datos" 
//  variant="filled" 
//  color="success" 
//  loading={true}
//  helperText="Espere mientras se cargan los datos"
///>
//
//
//<TextFieldComponent 
//  label="Correo electrónico" 
//  variant="standard" 
//  color="error" 
//  errorMessage="Correo no válido" 
//  helperText="Introduce tu correo electrónico"
//  showValidationIcon={true}
///>
