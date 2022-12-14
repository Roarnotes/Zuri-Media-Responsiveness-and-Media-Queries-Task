/** @format */

const submitBtn = document.querySelector(".submit-btn");
const inputs = document.querySelectorAll("input");
const warningTexts = document.querySelectorAll(".warning-text");

const placeholders = ["First Name", "Last Name", "Email Address", "Password"];

submitBtn.addEventListener("click", (event) => {
  allInputsFilled = true;
  event.preventDefault();

  inputs.forEach((input, i) => {
    if (input.name === "email" && !/@[a-z]+.com$/.test(input.value)) {
      input.classList.add("email-warning");
      input.placeholder = "email@example.com";
      warningTexts[i].classList.add("visible-text");
    }

    if (!input.value) {
      allInputsFilled = false;
      if (input.name === "email") {
        input.classList.add("email-warning");
        input.placeholder = "email@example.com";
      } else {
        input.classList.add("required");
        input.placeholder = "";
      }
      warningTexts[i].classList.add("visible-text");
    }
  });

  if (allInputsFilled && /@[a-z]+.com$/.test(inputs[2].value)) {
    console.log(true);
    inputs.forEach((input, i) => {
      input.value = "";
      input.placeholder = placeholders[i];
    });
  } else {
    console.log(false);
  }
});

inputs.forEach((input, i) => {
  input.addEventListener("change", () => {
    if (input.value) {
      if (input.name === "email" && /@[a-z]+.com$/.test(input.value)) {
        input.classList.remove("email-warning");
        input.placeholder = "";
      } else {
        input.classList.remove("required");
        input.placeholder = "";
      }
      warningTexts[i].classList.remove("visible-text");
    }
  });
});
