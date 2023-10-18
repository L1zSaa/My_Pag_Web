//alert("Hola este es mi Javascript");
document.addEventListener("DOMContentLoaded", function() {
    // Ahora puedes trabajar con el DOM de forma segura
  
    let contenidotitulo = "lizeth";
    let titulo = document.querySelector('.logo .fuente');
  
    if (titulo) {
      titulo.innerHTML = contenidotitulo;
    } else {
      console.log("Elemento no encontrado");
    }
  });