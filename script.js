
const buttonSi = document.getElementById('yes');
const textarea = document.getElementById('story');

const envio = () => {

  if (textarea.value.trim() === '' || textarea.value === 'escribe aquí.') {
    alert('Por favor, escribe algo antes de enviar.');
  } else {
    alert('Gracias por tu opinión.');

    textarea.value = 'escribe aquí.';
  }
};

buttonSi.addEventListener('click', envio);

function copyToClipboard() {
  const text = document.getElementById('textToCopy').value;
  navigator.clipboard.writeText(text).then(() => {
    alert('¡Texto copiado al portapapeles!');
  }).catch(err => {
    alert('Hubo un error al copiar el texto: ' + err);
  });
}
