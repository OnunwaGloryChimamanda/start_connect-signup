var employer_signup = document.getElementById("employer_signup");
var employee_signup = document.getElementById("employee_signup");
var fname =  document.getElementById("fname");
var fnameInput = document.getElementById("fName")
var email =  document.getElementById("eMail");/*id for the email label tag*/
var emailInput = document.getElementById("e_mail")/*id for the email input tag*/
var doc =  document.getElementById("yearOfCompletion"); /*doc is acronym for date of completion and it is for the label tag id*/
var docInput = document.getElementById("year_of_completion") /*doc input is the id for the year of completion input tag*/
var studentId =  document.getElementById("studentId"); /*for label tag*/
var studentIdInput = document.getElementById("student_id")/*for input tag*/
var linkedin = document.getElementById("linkedIn");
var twitter = document.getElementById("twitterAcc");
var phone =  document.getElementById("phoneNumber");//for label tag
var phoneInput = document.getElementById("phoneNo")//for input tag
var password =  document.getElementById("psswd");//for label tag
var passwordInput =  document.getElementById("password");//for input tag
var cv = document.getElementById("cV")//for label tag
var cvInput = document.getElementById("cv")//for input tag
var submission_alert = document.getElementById("submission_alert")


function employerSignup() {
    fname.innerHTML = "Company Name";
    email.innerHTML = "Company Location";
    emailInput.type = "text";
    doc.innerHTML = "Email Address*";
    docInput.type = "email";
    studentId.innerHTML = "Company Website";
    studentIdInput.type = "url"
    studentIdInput.required = false;
    cv.innerHTML = "Phone Number";
    cvInput.type = "tel";
    phone.innerHTML = "Password";
    phoneInput.type = "password";
    password.style.visibility = "hidden";
    passwordInput.style.visibility = "hidden";
    employer_signup.style.backgroundColor = "rgba(222, 219, 228, 1)";
    employee_signup.style.backgroundColor = "rgba(245, 245, 245, 1)";
   


}


function employeeSignup() {
    fname.innerHTML = "First Name*";
    email.innerHTML = "Email Address*";
    e_mail.type = "email";
    doc.innerHTML = "Year Of Completion*";
    docInput.type = "month";
    studentId.innerHTML = "Student ID";
    studentIdInput.type = "text"
    studentIdInput.required = true;
    cv.innerHTML = "CV";
    cvInput.type = "file";
    phone.innerHTML = "Phone Number";
    phoneInput.type = "tel";
    password.style.visibility = "visible";
    passwordInput.style.visibility = "visible";
    employee_signup.style.backgroundColor = "rgba(222, 219, 228, 1)";
    employer_signup.style.backgroundColor = "rgba(245, 245, 245, 1)";
   


}


function formValidation () {
    if (fName !== "" && 
    emailInput !== "" && 
    docInput !== "" &&
    studentIdInput.required === true &&
    studentIdInput!== "" &&
    phoneInput !== "" &&
    cv.innerHTML === "Phone Number" &&
    cvInput !== ""&&
    password.style.visibility === "visible" &&
    passwordInput !== ""
     ) {
        submission_alert.innerHTML = "Submission Successful!"

     }else{}
}