alert("Welcome to NRIIT Learning Mangement System")
let heading = document.getElementById ("welcome");
heading.innerHTML = "Welcome Future Software Engineers"
console.log("Heading element: ",heading)
let msg = document.getElementById("message")
msg.innerHTML = "Javascript is fun"
console.log("Message element: ",msg)
function showmessage() {
    alert("Welcome to NRIIT Learning Management System")}
function changeHeading() {
    document.getElementById("welcome").inneHTML = "Welcome Python Fullstack Developers"}
let heading1 = document.querySelector("#welcome");
console.log("Headfing element: ", heading)
let button = document.getElementById("btnGreeting");
button.addEventListener("click", function() {
    alert("Welcome to javascript Event Handling");
});
let registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit",function (event) {
    event.preventDeafault(); // prevent from submission
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (!name || !email || !password) {
        alert("please fill in all fileds.");
        return;

    }
    alert("Registeration sucessful!");

    //perform validation or further processing here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
});
