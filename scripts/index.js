// Replace with your API key and email address
const SENDGRID_API_KEY = "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";
const TO_EMAIL_ADDRESS = "amugumbiirvine@gmail.com";

const form = document.querySelector('form');
const nameInput = document.querySelector('#n');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#text');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from submitting normally

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

// Do something with the name, email, and message variables here, such as sending them using the SendGrid API
// Define the email message
const emailData = {
    personalizations: [
      {
        to: [{ email: TO_EMAIL_ADDRESS }],
      },
    ],
    from: { email: email },
    subject: name,
    content: [{ type: "text/plain", value: message }],
  };
  
  // Send the email using the SendGrid API
  fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log("Email sent successfully.");
    })
    .catch((error) => {
      console.error(error);
    });

  // Clear the form fields
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
});



