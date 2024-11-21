
const abrirModal = document.getElementById('abrir-modal');
const cerrarModal = document.getElementById('cerrar-modal');
const modal = document.getElementById('modal');


abrirModal.addEventListener('click', () => {
  modal.style.display = 'flex';
});


cerrarModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
