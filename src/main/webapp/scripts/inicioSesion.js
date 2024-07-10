const formulario = document.getElementById("formInicioSesion");

formulario.addEventListener("submit", evento => {
  
  evento.preventDefault();

  if(validarFormulario()){
    console.log("Subiendo data...")
    console.log(formulario)
    formulario.submit();
  } else{
    console.log("Faltan campos por completar...")
  }

});

formulario.querySelectorAll(".inputBox").forEach(input => {
  input.addEventListener("input", () => {
    formulario.querySelectorAll(".errorText").forEach(campoError => {
      campoError.innerText = ""
    })
    input.classList.remove("inputBoxError")
  })
})

function validarFormulario(){

  const email = document.getElementById("email");
  const pass = document.getElementById("password");
  let flag = true;

  if(email.value === ""){
    mostrarError(email, "Por favor ingrese una dirección email")
    flag = false;
  }
  if(pass.value === ""){
    mostrarError(pass, "Por favor ingrese una contraseña")
    flag = false
  }

  return flag
}

function mostrarError(campo, mensaje){
  const parentDiv = campo.parentNode;

  const errorText = parentDiv.querySelector(".errorText");
  const inputBox = parentDiv.querySelector(".inputBox")
  inputBox.classList.add("inputBoxError")
  errorText.innerText = mensaje
}