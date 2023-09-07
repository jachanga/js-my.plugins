(function() {
    var fullscreenButton = document.querySelector('.fullscreen-button');

    // Función para expandir la pantalla
    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error('Error al intentar expandir la pantalla:', err);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    // Agregar el evento clic al botón para expandir/reducir la pantalla
    fullscreenButton.addEventListener('click', toggleFullscreen);
})();
