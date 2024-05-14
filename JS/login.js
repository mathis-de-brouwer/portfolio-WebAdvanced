
const username = "admin";
const password = "admin";

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    let inputUsername = document.getElementById('inputUsername').value;
    let inputPassword = document.getElementById('inputPassword').value;

    if (username != inputUsername) {
        alert("Invalid username. Try again.");
    } else if (password != inputPassword) {
        alert("Invalid password. Try again.");
    } else {
        window.location.href = "../HTML/home.html";
    }

});