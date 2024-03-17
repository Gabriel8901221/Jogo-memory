const input = document.querySelector(".login-input");
const button = document.querySelector(".login-bnt");
const form = document.querySelector('.login-form')



const validateInput = ({ target }) => {
  if (target.value.length > 2) {
    button.removeAttribute("disabled");
    return;
  }
  button.setAttribute("disabled", '');
};

const handSubmit = (event) => {
  event.preventDefault()

  localStorage.setItem('player', input.value)
  window.location = 'pages/game.html'
}

input.addEventListener("input", validateInput);
form.addEventListener('submit', handSubmit);