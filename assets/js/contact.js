let form = document.querySelector('#form-contact');
let div = document.querySelector('#form-div');
form.addEventListener('submit', event => {
   event.preventDefault();
   div.innerHTML = `<div id="message-div"><p>Message has been sent!</p></div>`;
   div.classList.add('submitted');
});
