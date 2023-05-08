// Datos de los miembros del equipo
const teamMembers = [
    {
      nombre: "Enzo Mateo Antunez",
      imagen: "ruta/a/la/imagen1.jpg",
      descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit amet voluptatum nisi vero natus architecto harum est voluptates, commodi dolore, vel similique odit temporibus, itaque eius. Sapiente odit quia natus!"
    },
    {
      nombre: "German",
      imagen: "ruta/a/la/imagen2.jpg",
      descripcion: "Descripción del miembro 2"
    },
    {
      nombre: "Martina Lopez",
      imagen: "ruta/a/la/imagen3.jpg",
      descripcion: "Descripción del miembro 3"
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
  
      // Agregar la plantilla actualizada al contenedor de miembros del equipo
      teamMembersContainer.appendChild(teamMember);
    });
  }
  
  // Llamar a la función para mostrar los miembros del equipo
  mostrarMiembros();
  