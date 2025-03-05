document.addEventListener('DOMContentLoaded', function () {
    // Selecciona los botones y el sidebar
    const dashboardBtn = document.querySelector('.sidebar-btn');
    const sidebar = document.getElementById('sidebar');

    // Función para alternar las clases del sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('sidebar-hidden');
        sidebar.classList.toggle('sidebar-visible');
        dashboardBtn.classList.toggle('sidebar-hidden');
        dashboardBtn.classList.toggle('sidebar-visible');
    }

    // Añade el evento click a los botones
    if (dashboardBtn && sidebar) {
        dashboardBtn.addEventListener('click', toggleSidebar);
    } else {
        console.error('No se encontraron uno o más elementos en el DOM.');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const suggestionBox = document.querySelector('.suggestion-box');

    // Mostrar la caja de sugerencias cuando el input está en foco
    searchInput.addEventListener('focus', function() {
        suggestionBox.style.display = 'block';
    });

    // Ocultar la caja de sugerencias cuando el input pierde el foco
    searchInput.addEventListener('blur', function() {
        suggestionBox.style.display = 'none';
    });
});




// Centrar mapa
function reloadFrame(){
    document.getElementById('mapa').src = document.getElementById('mapa').src;
  }