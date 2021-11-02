function validateProfile() {
  let errors = {
    userName: [],
    email: [],
    password: [],
    repeatPassword: [],
  };
  let userName = document.profileForm.userName.value;
  let email = document.profileForm.email.value;
  let password = document.profileForm.password.value;
  let repeatPassword = document.profileForm.repeatPassword.value;
  const mailFormat = "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/";
  const passwordFormat =
    "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*s).+$";
  console.log(userName.length, email, password, repeatPassword);

  if (userName.length < 8 || userName.length > 20) {
    errors.userName.push("Username should have between 8 and 20 characters.");
  }
  if (email.length > 50) {
    errors.email.push("Email address should not be longer than 50 characters");
  }
  if (email.match(mailFormat)) {
    errors.email.push("Email must be a valid email address");
  }
  if (password.length < 8 || password.length > 20) {
    errors.password.push("Password must be between 8 and 20 characters long.");
  }
  if (password.match(passwordFormat) == null) {
    errors.password.push(
      "Password must contain number, uppercase, lowercase and a special character"
    );
  }
  if (repeatPassword != password) {
    errors.repeatPassword.push("Password must be the same");
  }
  console.log(errors);
  return errors;
}

export { validateProfile };
