$(document).ready(function() {
    // Función para cargar imágenes desde la API y obtener su DATA
    function loadImages() {
      $.ajax({
        type: "GET",
        url: "https://picsum.photos/v2/list?page=1&limit=12",
        dataType: "json",
        success: function(data) {
          renderGallery(data);
        }
      });
    }
  
    // Función para renderizar la galería
    function renderGallery(images) {
      var galleryContainer = $("#gallery-container");
      galleryContainer.empty(); // Limpiar la galería antes de agregar nuevas imágenes
  
      // Crear elementos de imagen y agregar al contenedor //APPEND Y FOR EACH
      images.forEach(function(image) {
        var imgElement = $("<img>").attr("src", image.download_url).addClass("gallery-image");
        galleryContainer.append(imgElement);
      });
    }
  
    // Cargar imágenes al iniciar la página
    loadImages();
  
    // Manejar clic en el botón "Cargar más imágenes"
    $("#load-more").click(function() {
      $.ajax({
        type: "GET",
        url: "https://picsum.photos/v2/list?page=2&limit=12",
        dataType: "json",
        success: function(data) {
          renderGallery(data);
        }
      });
    });
  });
  