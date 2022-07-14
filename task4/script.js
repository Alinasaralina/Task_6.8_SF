const Link= document.querySelector('#link');

Link.addEventListener('click', function(event) {
  this.textContent = prompt();
  event.preventDefault();
})