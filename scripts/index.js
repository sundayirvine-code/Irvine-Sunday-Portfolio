
const form = document.querySelector('form');
const nameInput = document.querySelector('#n');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#text');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // prevent the form from submitting normally

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "smtp.elasticemail.com",
    Password : "7EC05AE28814E7BC9283880E937F6E264DBDB42784EBE2A0956A0BB2716AACA0F7D38DA5C029F50E13DA4D97188D0A51",
    To : 'amugumbiirvine@gmail.com',
    From : "amugumbiirvine@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);


});
