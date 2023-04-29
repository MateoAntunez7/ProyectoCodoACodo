function comprobar() {
    
    const form = document.querySelector('#form_contacto');

    form.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = document.querySelector('#email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {

        document.getElementById("email").style.color="#ff3300";

        document.getElementById("email").value="Ingresa un correo electrónico válido."

        document.getElementById("email").style.fontStyle="italic";


    }

    const formData = new FormData();
    formData.append('email', emailInput.value.trim());

    fetch('https://formspree.io/f/xyyaogqr', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data)

    */
    });
}


function coprobar2() {

    if(document.getElementById("email").style.color == "rgb(255, 51, 0)") {
        document.getElementById("email").value="";
        document.getElementById("email").style.color="rgb(0, 0, 0)"
    }
    
}