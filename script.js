const floatEl = document.getElementById('float');
const saleContainer = document.querySelector('.sale-container');

function randomPosition() {
  const floatSize = 1500; 
  const rect = saleContainer.getBoundingClientRect();

  const x = Math.random() * (window.innerWidth - floatSize);

  const y = rect.top + Math.random() * (rect.height - floatSize);

  return { x, y };
}

function moveFloat(el) {
  const { x, y } = randomPosition();
  el.style.transition = 'transform 0.5s linear';
  el.style.transform = `translate(${x}px, ${y}px)`;
}

setInterval(() => moveFloat(floatEl), 700);
