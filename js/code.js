document.addEventListener("DOMContentLoaded", function () {
  // Selecciona los botones y el sidebar
  const dashboardBtn = document.querySelector(".sidebar-btn");
  const sidebar = document.getElementById("sidebar");

  // Función para alternar las clases del sidebar
  function toggleSidebar() {
    sidebar.classList.toggle("sidebar-hidden");
    sidebar.classList.toggle("sidebar-visible");
    dashboardBtn.classList.toggle("sidebar-hidden");
    dashboardBtn.classList.toggle("sidebar-visible");
  }

  // Añade el evento click a los botones
  if (dashboardBtn && sidebar) {
    dashboardBtn.addEventListener("click", toggleSidebar);
  } else {
    console.error("No se encontraron uno o más elementos en el DOM.");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const suggestionBox = document.querySelector(".suggestion-box");

  // Mostrar la caja de sugerencias cuando el input está en foco
  searchInput.addEventListener("focus", function () {
    suggestionBox.style.display = "block";
  });

  // Ocultar la caja de sugerencias cuando el input pierde el foco
  searchInput.addEventListener("blur", function () {
    // Retrasar la ocultación para permitir que el evento click se ejecute
    setTimeout(() => {
      suggestionBox.style.display = "none";
    }, 200); // 200ms es suficiente para que el click se procese
  });
});

//admin cambiar divs chofer anden
function cambiarDiv(divId) {
  const anden = document.getElementById("anden");
  const chofer = document.getElementById("chofer");

  // Ocultar ambos divs primero
  anden.style.display = "none";
  chofer.style.display = "none";

  // Mostrar el div correspondiente
  if (divId === "anden") {
    anden.style.display = "block";
  } else if (divId === "chofer") {
    chofer.style.display = "block";
  }
}

// Mostrar uno de los divs al cargar la página
window.onload = function () {
  cambiarDiv("anden"); // Mostrar el div de "Andenes" por defecto
};

// Centrar mapa
function reloadFrame() {
  document.getElementById("mapa").src = document.getElementById("mapa").src;
}
