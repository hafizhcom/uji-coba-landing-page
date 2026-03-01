const usernameSelect = document.getElementById("username");
const passwordInput = document.getElementById("password");
const login = document.getElementById("login");

login.onclick = function(event){
    event.preventDefault();
    const username = usernameSelect.value;
    const password = passwordInput.value;

    if(username === "13572468" && password === "1357" ){
        alert("Login Berhasil !!!");
        window.location.href = "toko.html";
    } else if (username === "24681357" && password === "2468"){
        alert("Login Berhasil !!!");
        window.location.href = "toko.html";
    }else if (username === "14725836" && password === "1472"){
        alert("Login Berhasil !!!");
        window.location.href = "toko.html";
    }else if (username === "36914725" && password === "3691"){
        alert("Login Berhasil !!!");
        window.location.href = "toko.html";
    }else {
        alert("Login gagal, periksa username dan password Anda");
    }
}
