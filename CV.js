const button = document.getElementById("b1");

button.addEventListener("click", (event) => {
  button.textContent = `Me gusta 😊: ${event.detail}`;
});

const button2 = document.getElementById("b2");

button2.addEventListener("click", (event) => {
  button2.textContent = `No me gusta 😢: ${event.detail}`;
});

const button3 = document.getElementById("b3");

button3.addEventListener("click", (event) => {
  button3.textContent = `Lo modificaría 🧐 : ${event.detail}`;
});

document.querySelectorAll('.printbutton').forEach(function(element) {
  element.addEventListener('click', function() {
      print();
  });
});

var nombre;
nombre = "jose";