function readvalue() {
    var name = $('#username').val();
}

function passwordvalid() {
    var pw1 = document.getElementById("password").value;
    var pw2 = document.getElementById("confirm_password").value;
    if (pw1 !== pw2) {
        alert("Passwords did not match");
    }
    
}

// function readvalue(){
// var input = document.getElementById('username');
// event.target.setCustomValidity('Username should contain atleast one digit, one uppercase and one lowercase character');}
function readvalue(event) {
    event.target.setCustomValidity('Username should atleast 1 lowercase, 1 upercase character and a digit');
}
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'm') {
        dark();
    }
});

window.onload = function(){
    document.getElementById('send').onclick = function(e){
        alert(document.getElementById("name").value);
        return false;
    }
}

function dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
