document.addEventListener("DOMContentLoaded", function (event) {
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
        // ... (código para mostrar/ocultar el menú lateral)
        
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId)

        // Validate that all variables exist
        if (toggle && nav && bodypd && headerpd) {
            toggle.addEventListener('click', () => {
                // show navbar
                nav.classList.toggle('show');
                // change icon
                toggle.classList.toggle('bx-x');
                // add padding to body
                bodypd.classList.toggle('body-pd');
                // add padding to header
                headerpd.classList.toggle('body-pd');
                
            });
        }
    }

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');

    const linkColor = document.querySelectorAll('.nav_link');

    function colorLink() {
        // Remover la clase "active" de todos los enlaces
        linkColor.forEach(l => l.classList.remove('active'));

        // Agregar la clase "active" al enlace al que se le hizo clic
        this.classList.add('active');
    }

    // Agregar eventos de clic y mouseover a los enlaces
    linkColor.forEach(link => {
        link.addEventListener('click', colorLink);
        link.addEventListener('mouseover', colorLink);
    });

    // Tu código que se ejecuta cuando el DOM está cargado y listo
});
