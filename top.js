// Ejecutar confeti al cargar la página
window.onload = function() {
    confetti({
      particleCount: 200, // Cantidad de partículas
      spread: 120,        // Dispersión del confeti
      origin: { y: 0.6 }, // Posición inicial del confeti
      colors: ['#ff7f50', '#87cefa', '#4caf50', '#ffdd57'] // Colores personalizados
    });
  };
  