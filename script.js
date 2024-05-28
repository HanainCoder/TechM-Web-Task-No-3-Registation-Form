const form=document.getElementById('form');
const username=document.getElementById('username');
const contact_number=document.getElementById('contact_number');
const email=document.getElementById('email');
const password=document.getElementById('password');
const confirm_password=document.getElementById('confirm_password');

const showPassword = document.getElementById("showPassword");

showPassword.addEventListener("click", function() {
    if (password.getAttribute("type") === "password") {
        password.setAttribute("type", "text");
        showPassword.setAttribute("src", "Images/eye-close.png"); 
        showPassword.setAttribute("alt", "Hide Password");
    } else {
        password.setAttribute("type", "password");
        showPassword.setAttribute("src", "Images/eye-close.png"); 
        showPassword.setAttribute("alt", "Show Password");
    }
});


form.addEventListener('submit',e=>{
    e.preventDefault();
    validateInputs();
});
const setError = (element,message)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText=message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const setSuccess = element =>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// function isValidEmail(email) {
//     return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
// }
const validateInputs = ()=>{
  const usernameValue=username.value.trim();
  const contact_numberValue=contact_number.value.trim();
  const emailValue=email.value.trim();
  const passwordValue=password.value.trim();
  const confirm_passwordValue=confirm_password.value.trim();
  if(usernameValue===''){
    setError(username,'Username is required.');
  }
  else{
    setSuccess(username);
  }
  if(contact_numberValue===''){
    setError(contact_number,'Contact_Number must be required');
  }

  else if(!/^\d{11}/.test(contact_numberValue)){
    setError(contact_number,'Please provide a valid contact Number');
  }
  else if(contact_numberValue.length!==11){
    setError(contact_number,'Contact Number should be at least 11 charcters.');

  }
  else{
    setSuccess(contact_number);
  }
  if(emailValue===''){
    setError(email,'Please provide email.');
  }
  else if(!emailValue.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
    setError(email,"Provide valid Email.");
  }
  else{
    setSuccess(email);
  }
  if(passwordValue===''){
    setError(password,'Password is necessary for sign-up');
  }
  else if(passwordValue.length<8){
    setError(password,'Password must be atleast 8 characters.')
  }
  else{
    setSuccess(password);
  }
  if(confirm_passwordValue===''){
    setError(confirm_password,'Please confirm your password.');
  }
  else if(passwordValue!==confirm_passwordValue){
    setError(confirm_password,'Password is not match, please try again.');
  }
  else{
    setSuccess(confirm_password);
  }
};

