(function() {
    var themeButton = document.querySelector('.theme-button');
    var body = document.body;

    // Función para cambiar el tema
    function toggleTheme() {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
        } else {
            body.classList.add('dark-theme');
        }
    }

    // Agregar el evento clic al botón para cambiar el tema
    themeButton.addEventListener('click', toggleTheme);
})();
