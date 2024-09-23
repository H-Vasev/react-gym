export function validateForm(formData) {
  const messages = {
    isEmailError: false,
    isPasswordError: false,
    isConfirmPassError: false,
    email: "",
    password: "",
    confirmPassword: "",
  };

  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

  if(formData.email && emailRegex.test(formData.email)){
    messages.isEmailError = false;
    messages.email = "";
  }else {
    messages.isEmailError = true;
    messages.email = "The entered email is incorrect!"
  }

  if(formData.password.length < 5){
    messages.isPasswordError = true;
    messages.password = "The password must be at least 5 characters long!";
  }else{
    messages.isPasswordError = false;
    messages.password = "";
  }

  if (formData.confirmPassword != formData.password) {
    messages.isConfirmPassError = true;
    messages.confirmPassword = "The password you entered don't match!";
  } else {
    messages.isConfirmPassError = false;
    messages.confirmPassword = "";
  }

  return messages;
}
