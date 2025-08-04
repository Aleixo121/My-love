// Pequena animação extra para corações do rodapé
const footerHearts = document.querySelectorAll('.footer-heart');
footerHearts.forEach((heart, i) => {
    heart.style.animationDelay = `${i * 0.4}s`;
});

// Você pode adicionar mais interações fofas aqui se quiser
