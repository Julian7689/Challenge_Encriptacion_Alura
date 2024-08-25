const inputText = document.getElementById('input-text');
const outputMessage = document.getElementById('output-message');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');


function encrypt(text) {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function decrypt(text) {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}


encryptBtn.addEventListener('click', () => {
    const encryptedText = encrypt(inputText.value);
    outputMessage.textContent = encryptedText || "Ningún mensaje fue encontrado";
});

decryptBtn.addEventListener('click', () => {
    const decryptedText = decrypt(inputText.value);
    outputMessage.textContent = decryptedText || "Ningún mensaje fue encontrado";
});
