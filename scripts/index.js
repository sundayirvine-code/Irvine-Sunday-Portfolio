/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

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
    SecureToken : "8924576e-c581-4733-baf9-2949a195d560",
    To : 'amugumbiirvine@gmail.com',
    From : email,
    Subject : name,
    Body : message
}).then(() => {
    // Clear the form fields
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  })
  .catch((error) => {
    console.error('Failed to send email:', error);
  });

});
