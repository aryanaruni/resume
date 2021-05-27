var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var success = document.getElementById("success");
  var error = document.getElementById("error");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(() => {
    success.innerHTML = "Thanks for your submission!";
    success.style.display = "block";
    form.reset()
  }).catch(error => {
    error.innerHTML = "Oops! There was a problem submitting your form";
    error.style.display = "block";
  });
}
form.addEventListener("submit", handleSubmit)