
const form = document.querySelector('form');
const nameInput = document.querySelector('#n');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#text');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // prevent the form from submitting normally

  const name = nameInput.value;
  const email = emailInput.value.trim();
  const message = messageInput.value;

  const body = ` 
    <b>Name: </b>${name}
    <br>
    <b>From: </b>${email}
    <br>
    <b>Message: </b>${message}
    <br>
    `
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "amugumbiirvine@gmail.com",
    Password : "D670848FC98E6016BD909C16E5D03686D74E",
    To : 'amugumbiirvine@gmail.com',
    From : 'amugumbiirvine@gmail.com',
    Subject : 'Client Email: ' + email,
    Body : body,
}).then(
  message => alert(message)
);
// Clear the form fields
nameInput.value = '';
emailInput.value = '';
messageInput.value = '';

});
