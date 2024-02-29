
document.addEventListener("DOMContentLoaded", function(event){
  validateCheckOutAfterCheckInFilled();
})


document.getElementById('check-in-date').addEventListener('input',function(event){
  let checkIn = document.getElementById('check-in-date').value;
  let checkOutInput = document.getElementById('check-out-date');
  if(checkIn !== ''){
    checkOutInput.disabled = false;
  }
});


document.getElementById('reservation-form').addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  resetErrors();
  validateEmail();
  validateName();
  validateCheckInDate();
  validateCheckOutDate();
  validateRoomType();

  if (Array.from(document.getElementsByClassName('error-message')).every(error => error.innerText === '')) {
    alert('Reservation created successfully!');
    document.getElementById('reservation-form').reset();
  }
}
function filled(elementId){
  document.getElementById(elementId).classList.add('filled');
}
function displayError(elementId, errorMessage) {
  document.getElementById(elementId + '-error').innerText = errorMessage;
}

function resetErrors() {
  let errorMsg = document.getElementsByClassName('error-message');
  Array.from(errorMsg).forEach(message => message.innerText = '');
}

function validateName(){
  let name = document.getElementById('name-input').value;
  if (name.trim() === '') {
    displayError('name', 'Please enter your name');
  }
  else if(name.length < 3){
    displayError('name', 'Name Must be more than 2 characters');
  }
  else{
    displayError('name','');
    filled('name-input');
  }
  return;
}

function validateEmail() {
  let email = document.getElementById('email-input').value;
  if (email.trim() === '') {
    displayError('email', 'Please enter your email!');
    return;
  }
  let [name, domain] = email.split('@');
  if (!email.includes('@')) {
    displayError('email', 'Email must contain a domain!');
    return;
  }
  else if (name.trim() === '') {
    displayError('email', 'Email name cannot be empty!');
    return;
  }
  else if (!domain.includes('.')) {
    displayError('email', 'Invalid email domain!');
  }
  let [domainName, tld] = domain.split('.');
  if(domainName.trim() === ''){
    displayError('email', 'Fill the domain name!')
  }
  else if(tld.trim() === ''){
    displayError('email', 'Fill the TLD of the domain!')
  }
  else{
    displayError('email','')
    filled('email-input')
  }
}

function validateCheckInDate(){
  let checkIn = document.getElementById('check-in-date').value;
  let checkOutInput = document.getElementById('check-out-date');
  let checkInDate = new Date(checkIn);
  if(checkIn === ''){
    displayError('check-in-date', 'Please select the check in date!');
  }
  else if (checkInDate < new Date()) {
    displayError('check-in-date', 'Check in date cannot be in the past!');
  }
  else{
    displayError('check-in-date','')
    filled('check-in-date')
    checkOutInput.disabled = false;
  }
}

function validateCheckOutAfterCheckInFilled(){
  let checkIn = document.getElementById('check-in-date').value;
  let checkOutInput = document.getElementById('check-out-date');
  let checkOut = checkOutInput.value;
  if (checkIn === '') {
    checkOutInput.disabled = true; 
    return;
  }
}
function validateCheckOutDate(){
  let checkIn = document.getElementById('check-in-date').value;
  let checkOutInput = document.getElementById('check-out-date');
  let checkOut = checkOutInput.value;
  let checkInDate = new Date(checkIn);
  let checkOutDate= new Date(checkOut);
  if (checkOut === '') {
    displayError('check-out-date', 'Please select the check-out date');
  }
  else if (checkIn === checkOut) {
    displayError('check-out-date', 'Check Out Date Cannot Be The Same As Check In Date');
  }
  else if (checkOutDate < checkInDate) {
    displayError('check-out-date', 'Check out date must be at least 1 day after check in!');
  }
  else{
    displayError('check-out-date','');
    filled('check-out-date');
  }
}

function validateRoomType(){
  let roomType = document.getElementById('room-type-input').value;
  if (roomType === '') {
    displayError('room-type', 'Please select the room type');
  }
  else{
    displayError('room-type','');
    filled('room-type-input');
  }
}