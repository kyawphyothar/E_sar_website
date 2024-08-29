const button = document.querySelector('.button2');

button.addEventListener('mouseenter', () => {
  const maxWidth = window.innerWidth - button.clientWidth;
  const maxHeight = window.innerHeight - button.clientHeight;

  const newX = Math.random() * maxWidth;
  const newY = Math.random() * maxHeight;

  button.style.left = `${newX}px`;
  button.style.top = `${newY}px`;
});

function redirectPage(){
  location.replace("https://youtu.be/dQw4w9WgXcQ?si=npdHuXbAFRMQdUJ0")
}


