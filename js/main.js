const form = document.querySelector("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernamevalue = username.value.trim();
  const passwordvalue = password.value.trim();
  const password2value = password2.value.trim();

  // Username inputs
  if (usernamevalue === "") {
    setError(username, "Error: Username cannot be Empty");
  } else {
    setSuccess(username);
  }

  // Password Input
  if (passwordvalue === "") {
    setError(password, "Error: Password cannot be empty");
  } else {
    setSuccess(password);
  }

  // Check for password confirmation input
  if (password2value =="") {
    setError(password2, "Error: Password cannot be empty");
  }else if (passwordvalue !== password2value){
    setError(password2, "Error: Passwords do not match");
  } 
  else {
    setSuccess(password2);
  }
}

function setError(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.classList.remove("form-control", "success");
  formControl.classList.add("form-control", "error");
  small.textContent = message;
}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("form-control", "error");
  formControl.classList.add("form-control", "success");
}