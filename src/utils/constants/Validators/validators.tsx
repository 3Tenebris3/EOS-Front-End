/**
 * Valida si el email tiene un formato válido.
 * @param email - El correo electrónico a validar.
 * @returns Verdadero si el email es válido, falso en caso contrario.
 */
export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Valida si el número de teléfono tiene un formato válido (ejemplo: 123-456-7890).
 * Puedes personalizar el regex según los formatos de teléfono de tu región.
 * @param phoneNumber - El número de teléfono a validar.
 * @returns Verdadero si el número de teléfono es válido, falso en caso contrario.
 */
export const validatePhoneNumber = (phoneNumber: string): boolean => {
    const phoneRegex = /^\+?\d{1,4}?[-.\s]?(\(?\d{1,4}?\)?[-.\s]?)?\d{1,4}[-.\s]?\d{1,9}$/;
    return phoneRegex.test(phoneNumber);
};

/**
 * Valida si la contraseña cumple con los requisitos de longitud y complejidad.
 * En este caso, la contraseña debe tener al menos 8 caracteres, y contener al menos
 * una letra mayúscula, una letra minúscula, un número y un carácter especial.
 * @param password - La contraseña a validar.
 * @returns Verdadero si la contraseña es válida, falso en caso contrario.
 */
export const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
};

/**
 * Valida si una cadena contiene solo caracteres alfabéticos (sin números ni caracteres especiales).
 * @param text - El texto a validar.
 * @returns Verdadero si el texto es alfabético, falso en caso contrario.
 */
export const validateAlphabetic = (text: string): boolean => {
    const alphabeticRegex = /^[A-Za-z]+$/;
    return alphabeticRegex.test(text);
};

/**
 * Valida si una cadena es un número (enteros o decimales).
 * @param number - El número a validar.
 * @returns Verdadero si es un número válido, falso en caso contrario.
 */
export const validateNumber = (number: string): boolean => {
    const numberRegex = /^-?\d+(\.\d+)?$/;
    return numberRegex.test(number);
};

/**
 * Valida si una URL tiene un formato válido.
 * @param url - La URL a validar.
 * @returns Verdadero si la URL es válida, falso en caso contrario.
 */
export const validateURL = (url: string): boolean => {
    const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9.-]+)(:[0-9]{1,5})?(\/.*)?$/;
    return urlRegex.test(url);
};

/**
 * Valida si un código postal tiene un formato válido.
 * Este es un ejemplo general que puede ajustarse según el formato del país.
 * @param postalCode - El código postal a validar.
 * @returns Verdadero si el código postal es válido, falso en caso contrario.
 */
export const validatePostalCode = (postalCode: string): boolean => {
    const postalCodeRegex = /^\d{4,5}$/;
    return postalCodeRegex.test(postalCode);
};

/**
 * Valida si una fecha tiene un formato válido (dd/mm/yyyy o yyyy-mm-dd).
 * Puedes personalizar el regex según el formato de fecha esperado.
 * @param date - La fecha a validar.
 * @returns Verdadero si la fecha es válida, falso en caso contrario.
 */
export const validateDate = (date: string): boolean => {
    const dateRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.) (?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.) (?:0?[1-9]|1[0-2])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    return dateRegex.test(date);
};

/**
 * Valida si una cadena está vacía o solo contiene espacios en blanco.
 * @param text - El texto a validar.
 * @returns Verdadero si la cadena está vacía, falso en caso contrario.
 */
export const isEmptyOrWhitespace = (text: string): boolean => {
    return text.trim().length === 0;
};
