var Nav = document.getElementById("Nav");

function showmenu() {
    Nav.style.top = "0";

}
function hidemenu() {
    Nav.style.top = "-600px";

}
function formpage() {
    document.getElementById("Btn").onclick = formpage()
    {
        location.href = "formpage";
    }
}

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");



function Apply() {
    window.location = "form.html"
}

function Program() {
    window.location = "program.html"
}

function contact() {
    window.location = "contact.html"
}

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
});

let userName = document.getElementById("regUserName");



const registerUser = () => {
    if (userName.value === "") {
        alert("Fill the empty places")
    }
    else {
        alert(`Welcome ${email}`)
    }

    window.location = "register.html"

}



let useremail = document.getElementById("loginEmail");
let pass = document.getElementById("loginPass");
const loginUser = () => {



    if (useremail.value === "") {
        alert("Fill the empty places")
    } else if (pass.value === "") {
        alert("Fill the empty places")
    }
    else {
        alert(`Welcome ${useremail.value}`);
    }

    window.location = "login.html";

}
