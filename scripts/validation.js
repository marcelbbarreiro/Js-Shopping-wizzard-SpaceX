function validateProfile() {
  let errors;
  let firstName = document.forms["profileForm"]["firstName"].value;
  let email = document.profileForm.email.value;
  let password = document.profileForm.password.value;
  let repeatPassword = document.profileForm.repeatPassword.value;
  if (firstName.length() < 8 || firstName.length() > 20) {
    errors.name.push("Firstname should have between 8 and 20 characters.");
  }
  if (email.length() > 50) {
    errors.email.push("Email address should not be longer than 50 characters");
  }
  if (password.length() < 8 || password.length > 20) {
    errors.password.push("Password must be between 8 and 20 characters long.");
  }
  if (
    !password.match(
      "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*s).+$"
    )
  ) {
    errors.password.push(
      "Password must contain number, uppercase, lowercase and a special character"
    );
  }
  if (repeatPassword != password) {
    errors.repeatPassword.push("Password must be the same");
  }
  return errors;
}

export { validateProfile };
