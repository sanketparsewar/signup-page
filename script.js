const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const std = document.getElementById("std");
const mobile = document.getElementById("mobile");
const address = document.getElementById("address");
const email = document.getElementById("email");
const password = document.getElementById("password");
const rePassword = document.getElementById("re-password");
const hobbie = document.getElementById("hobbie");
const hobbies = document.querySelector(".hobbies");
const form = document.getElementById("myForm");
const message = document.getElementById("message");
const male = document.getElementById("male");
const female = document.getElementById("female");
let isCorrect = true;

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  //   console.log("Form submit prevented!");
});

function check() {
  checkFname();
  checkLname();
  checkStd();
  checkMobile();
  checkAddress();
  checkEmail();
  checkPassword();
  checkRePassword();
  checkGender();
  if (isCorrect == true) {
    message.innerText = "Data is correct";
  }
  
}

function checkFname() {
  let reg = /^[a-zA-Z]+$/;
  if (fName.value == "") {
    alert("Enter first name");
    isCorrect = false;
  } else if (!reg.test(fName.value)) {
    alert("Enter valid First name");
    isCorrect = false;
  } else {
    return;
  }
}

function checkLname() {
  let reg = /^[a-zA-Z]+$/;
  if (lName.value == "") {
    alert("Enter last name");
    isCorrect = false;
  } else if (!reg.test(lName.value)) {
    alert("Enter valid Last name");
    isCorrect = false;
  } else {
    return;
  }
}
function checkStd() {
  if (std.value == "") {
    alert("Enter Class");
    isCorrect = false;
  } else {
    return;
  }
}

function checkGender() {
  if (male.checked) {
    console.log(male.value);
  } else if (female.checked) {
    console.log(female.value);
  } else {
    console.log("Select Gender!");
  }
}

function checkMobile() {
  const reg = /^\d{10}$/;
  if (mobile.value == "") {
    alert("Enter mobile number");
    isCorrect = false;
  } else if (!reg.test(mobile.value)) {
    alert("Enter valid mobile number");
    isCorrect = false;
  } else {
    return;
  }
}
function checkAddress() {
  if (address.value == "") {
    alert("Enter address");
    isCorrect = false;
  } else {
    return;
  }
}

function checkEmail() {
  var reg = /^\S+@\S+\.\S+$/;
  if (email.value == "") {
    alert("Enter email");
    isCorrect = false;
  } else if (!reg.test(email.value)) {
    alert("Enter a valid email address.");
    isCorrect = false;
  } else {
    return;
  }
}

function checkPassword() {
  let reg = /^[a-zA-Z0-9]{8,}$/;
  if (password.value == "") {
    alert("Enter password");
    isCorrect = false;
  } else if (!reg.test(password.value)) {
    alert("Enter a valid password.");
    isCorrect = false;
  } else {
    return;
  }
}

function checkRePassword() {
  if (rePassword.value == "") {
    alert("Retype password");
    isCorrect = false;
  } else if (password.value != rePassword.value) {
    alert("ReType correct password");
    isCorrect = false;
  } else {
    return;
  }
}

let hobbieArray = [];

function add() {
  if (hobbie.value == "") {
    alert("enter hobbie");
  } else {
    hobbieArray.push(hobbie.value);
    display();
  }
}

function display() {
  let text = "";
  for (let i = 0; i < hobbieArray.length; i++) {
    text += `<li id='item${i}'>${hobbieArray[i]}
              <button onclick='deleteHobbie(${i})' id="btn-${i}">X</button>
              </li> `;
  }
  hobbies.innerHTML = text;
  hobbie.value = "";
}
function deleteHobbie(i) {
  hobbieArray.splice(i, 1);
  display();
}
