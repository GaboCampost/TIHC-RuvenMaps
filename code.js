document.addEventListener('DOMContentLoaded', function () {
    
    const dashboardBtn = document.querySelector('.sidebar-btn');
    const sidebar = document.getElementById('sidebar');

    
    function toggleSidebar() {
        sidebar.classList.toggle('sidebar-hidden');
        sidebar.classList.toggle('sidebar-visible');
        dashboardBtn.classList.toggle('sidebar-hidden');
        dashboardBtn.classList.toggle('sidebar-visible');
    }

    
    if (dashboardBtn && sidebar) {
        dashboardBtn.addEventListener('click', toggleSidebar);
    } else {
        console.error('No se encontraron uno o más elementos en el DOM.');
    }
});



document.addEventListener('DOMContentLoaded', function() {

    const searchBar = document.querySelector('.floating-search-bar');

    if (searchBar) {
        searchBar.addEventListener('click', function() {
            window.location.href = window.location.href.split('#')[0] + '#popup-search';
        });
    } else {
        console.error('El elemento .floating-search-bar no fue encontrado en el DOM.');
    }
});

function cambiarDiv(divId) {
    const anden = document.getElementById('anden');
    const chofer = document.getElementById('chofer');

    anden.style.display = 'none';
    chofer.style.display = 'none';

    if (divId === 'anden') {
        anden.style.display = 'block';
    } else if (divId === 'chofer') {
        chofer.style.display = 'block';
    }
}

window.onload = function() {
    cambiarDiv('anden'); 
};


function reloadFrame(){
    document.getElementById('mapa').src = document.getElementById('mapa').src;
  }