$(document).ready(function() {
    // Obtener el estado actual del tema al cargar la página
    var currentTheme = $('body').attr('data-bs-theme');
  
    // Manejar el evento de guardado de la tarea
    $('#guardar-btn').click(function(event) {
      event.preventDefault();
  
      // Obtener los datos de la tarea a guardar
      var task = $('#tasktxt').val();
      var text = $('#texttxt').val();
  
      // Realizar la lógica de guardado de la tarea aquí
  
      // Restaurar el estado del tema después del guardado
      $('body').attr('data-bs-theme', currentTheme);
    });
  });