// Datos de los miembros del equipo
const teamMembers = [
  {
    nombre: "Enzo Mateo Antunez",
    imagen: "../images/Foto-Mateo.jpg",
    descripcion: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/enzo-mateo-ant%C3%BAnez-662036260/",
    github: "https://github.com/Mateoantunez7"
  },
  {
    nombre: "German Anselmo",
    imagen: "../images/german.jpeg",
    descripcion: "Python Software and FrontEnd Vue.js Developer with hundred of hours of practice with it's languages and a good amount of libraries and frameworks. Also learning Java.",
    linkedin: "https://www.linkedin.com/in/german-anselmo/",
    github: "https://github.com/gmanselmo"
  },
  {
    nombre: "Martina Lopez",
    imagen: "",
    descripcion: "Descripción del miembro 3",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/"
  }
];

document.addEventListener("DOMContentLoaded", function() {
  mostrarMiembros();
});

// Función para crear y mostrar los miembros del equipo
function mostrarMiembros() {
  const teamMemberTemplate = document.getElementById("team-member-template");
  const teamMembersContainer = document.querySelector(".team-members");

  // Crear y agregar elementos para cada miembro
  teamMembers.forEach(member => {
    // Crear una instancia de la plantilla
    const teamMember = document.importNode(teamMemberTemplate.content, true);

    // Agregar la imagen, el nombre y la descripción del miembro del equipo a la plantilla
    teamMember.querySelector("img").src = member.imagen;
    teamMember.querySelector("img").alt = member.nombre;
    teamMember.querySelector("h3").textContent = member.nombre;
    teamMember.querySelector("p").textContent = member.descripcion;

    // Crear los iconos de LinkedIn y GitHub
    const linkedinIcon = document.createElement("i");
    linkedinIcon.classList.add("fa", "fa-linkedin");

    const githubIcon = document.createElement("i");
    githubIcon.classList.add("fa", "fa-github");

    // Crear los enlaces a LinkedIn y GitHub
    const linkedinLink = document.createElement("a");
    linkedinLink.href = member.linkedin;
    linkedinLink.target = "_blank";
    linkedinLink.appendChild(linkedinIcon);

    const githubLink = document.createElement("a");
    githubLink.href = member.github;
    githubLink.target = "_blank";
    githubLink.appendChild(githubIcon);

    // Agregar los enlaces a la plantilla
    teamMember.querySelector(".team-member-social").appendChild(linkedinLink);
    teamMember.querySelector(".team-member-social").appendChild(githubLink);

    // Agregar la plantilla actualizada al contenedor de miembros del equipo
    teamMembersContainer.appendChild(teamMember);
  });
}

// Llamar a la función para mostrar los miembros del equipo
mostrarMiembros();
