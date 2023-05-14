_toggle.onclick = () => {
    _items.classList.toggle("open");
    _toggle.classList.toggle("close");

    const titulaso = document.getElementById("titulopersonaje");
    const paddingTopActual = titulaso.style.paddingTop;

    if (paddingTopActual === "3rem" || paddingTopActual === "") {
        titulaso.style.paddingTop = "18rem";
    } else {
        titulaso.style.paddingTop = "3rem";
    }
};