document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show-menu');
        menuToggle.textContent = menu.classList.contains('show-menu') ? '✖' : '☰';
    });

    
    document.getElementById('year').textContent = new Date().getFullYear();

    
    document.getElementById('last-modified').textContent = document.lastModified;
});
