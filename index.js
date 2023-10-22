function traerDatosAPI() {
                
    fetch('https://randomuser.me/api')

        .then(datos => datos.json())

        .then(datos => {
        
            contenido.innerHTML = `
                    <div class="tarjeta">
                        <!-- Muestra una imagen obtenida de los datos de la API. -->
                        <img src="${datos.results[0].picture.large}"</img><br>

                        <!-- Muestra el nombre obtenido de los datos de la API. -->
                        Nombre: ${datos.results[0].name.last}, ${datos.results[0].name.first}<br>

                        <!-- Muestra el nombre de usuario obtenido de los datos de la API. -->
                        Ciudad: ${datos.results[0].location.city}<br>

                    </div>`;
        });
}
