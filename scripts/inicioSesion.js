const formulario = document.getElementById("formInicioSesion");

formulario.addEventListener("submit", evento => {
  
  evento.preventDefault();

  if(validarFormulario()){
    formulario.submit();
  }

});

function validarFormulario(){

  const email = document.getElementById("email");
  const pass = document.getElementById("password");

  if(email.value === ""){
    mostrarError(email, "Por favor ingrese una dirección email")
    return false
  }
  if(pass.value === ""){
    mostrarError(pass, "Por favor ingrese una contraseña")
    return false
  }

}

//funcion para validar un correo electronico utilizando una expresion regular
// function validarEmail(email){
//   const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return expresionRegular.test(email)
// }

function mostrarError(campo, mensaje){
  console.log(campo)
  const parentDiv = campo.parentNode;

  const errorText = parentDiv.querySelector(".errorText");
  const inputBox = parentDiv.querySelector(".inputBox")
  inputBox.classList.add("inputBoxError")
  errorText.innerText = mensaje
}