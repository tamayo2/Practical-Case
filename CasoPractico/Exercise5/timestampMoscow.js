/**
 * Convierte un timestamp UNIX a una fecha y hora en la zona horaria de Moscú.
 *
 * Este script convierte un timestamp UNIX de 1000 segundos desde la medianoche del 1 de enero de 1970
 * a la hora local de Moscú (UTC+3). Utiliza la clase Date de JavaScript y la API Intl.DateTimeFormat
 * para formatear la fecha y hora en la zona horaria especificada.
 */

// Timestamp UNIX en segundos
const timestamp = 1000 * 1000; // Convertimos de segundos a milisegundos

// Crear un objeto Date con el timestamp
const date = new Date(timestamp);

// Configurar las opciones para formatear la fecha y hora en la zona horaria de Moscú (UTC+3)
const options = {
    timeZone: 'Europe/Moscow', // Zona horaria de Moscú
    year: 'numeric', // Año numérico completo
    month: 'numeric', // Mes numérico
    day: 'numeric', // Día numérico
    hour: 'numeric',  // Hora numérica
    minute: 'numeric',  // Minuto numérico
    second: 'numeric',  // Segundo numérico
    hour12: false  // Formato de 24 horas
};


// Formatear la fecha y hora en la zona horaria de Moscú
const dateInMoscow = new Intl.DateTimeFormat('en-GB', options).format(date);


// Imprimir la fecha y hora en Moscú en la consola
console.log(dateInMoscow); // Output: 01/01/1970, 3:16:40 

/**
 * Salida esperada:
 * Fecha y hora exactas en Moscú para el timestamp 1000: 1/1/1970, 3:16:40
 */