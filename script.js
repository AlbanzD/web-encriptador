// Variables globales para almacenar el mapeo
const encryptionMap = {};
const decryptionMap = {};
let originalText = ''; // Variable para almacenar el texto original

// Generar un mapeo aleatorio para las letras y números
function generateRandomMapping() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const shuffled = letters.split('').sort(() => 0.5 - Math.random()).join('');
    for (let i = 0; i < letters.length; i++) {
        encryptionMap[letters[i]] = shuffled[i];
        decryptionMap[shuffled[i]] = letters[i];
    }
}

// Inicializar el mapeo una vez
generateRandomMapping();

// Función para encriptar el texto
function encryptText() {
    const inputText = document.getElementById('inputText').value;
    let encryptedText = '';
    originalText = inputText; // Guardar el texto original

    // Encriptar el texto utilizando el mapeo
    for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i];
        if (encryptionMap[char]) {
            encryptedText += encryptionMap[char];
        } else {
            encryptedText += char;
        }
    }

    document.getElementById('outputText').value = encryptedText;
}

// Función para desencriptar el texto
function decryptText() {
    const encryptedText = document.getElementById('inputText').value; // Obtener el texto encriptado desde el área de texto de entrada
    let decryptedText = '';

    // Verificar si el texto en el área de texto de entrada es diferente del original
    if (encryptedText !== originalText) {
        // Desencriptar el texto utilizando el mapeo
        for (let i = 0; i < encryptedText.length; i++) {
            const char = encryptedText[i];
            if (decryptionMap[char]) {
                decryptedText += decryptionMap[char];
            } else {
                decryptedText += char;
            }
        }

        document.getElementById('outputText').value = decryptedText; // Mostrar el mensaje desencriptado en el área de texto de salida
    }
}
