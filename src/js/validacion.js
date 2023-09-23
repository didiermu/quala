const checkbox = document.querySelector("#check-edad");
checkbox.addEventListener("click", (e) => {
    if (checkbox.checked) {
        localStorage.setItem("edad", true);
    } else {
        localStorage.removeItem("edad");
    }
});

if (localStorage.getItem("edad")) {
    window.location.href = "home.html";
}

document.querySelector("#no").addEventListener("click", () => {
    document.querySelector("#no-validacion").style.display = "grid";
    document.querySelector("#validacion").style.display = "none";
});
