const form = document.querySelector("form");
const input = document.getElementById("input-email");
const errorMsg = document.getElementById("error");
const validateEmail =
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

input.addEventListener("keyup", () => {
  if (input.value.match(validateEmail) || input.value === "") {
    input.classList.remove("inputIcon");
    errorMsg.innerHTML = "";
    input.style.cssText =
      "backGround-color: #fff;border:1px solid hsl(0, 36%, 70%);";
  } else {
    errorMsg.innerHTML = "Please provide a valid email.";
    input.classList.add("inputIcon");
    input.style.cssText =
      "backGround-color: hsl(0, 36%, 70%);border:1px solid hsl(0, 93%, 68%);color:#fff";
  }
});

form.addEventListener("submit",(e) => {
  if (input.value.match(validateEmail)) {
    return true;
  } else {
    e.preventDefault();
    errorMsg.innerHTML = "Please provide a valid email.";
    input.classList.add("inputIcon");
    input.style.cssText =
      "background-color: hsl(0, 36%, 70%); border: 1px solid hsl(0, 93%, 68%);";
    return false;
  }
});
