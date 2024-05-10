// Seleccionar el formulario por su ID
const formRegister = document.querySelector("#formRegister");

// Función para limpiar las validaciones anteriores
const clearValidations = () => {
    // Seleccionar todos los campos de entrada y elementos de error
    const inputs = document.querySelectorAll("input");
    const errorElements = document.querySelectorAll(".error");

    // Iterar sobre los campos de entrada y elementos de error y limpiarlos
    inputs.forEach(input => {
        input.classList.remove('error');
        // Verificar si el elemento hermano siguiente existe antes de acceder a su propiedad textContent
        // No todos los inputs tienen a continuacion un div class error.
        const nextSibling = input.nextElementSibling;
        if (nextSibling !== null) {
            nextSibling.textContent = '';
        }
    });

    errorElements.forEach(errorElement => {
        errorElement.textContent = '';
    });
    
}
// Función para validar el formulario
const validarFormulario = (event) => {
    // Prevenir el comportamiento predeterminado de envío del formulario
    event.preventDefault();
    // Limpiar las validaciones anteriores
    clearValidations();

    // Obtener referencias a los campos del formulario
    const firstname = document.querySelector("#firstname");
    const lastname = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    let validation = true;
    // Validar el campo firstname
    if(!firstname.value.trim()){
        firstname.classList.add('error')
        document.querySelector("#error-firstname").textContent='Debe completar el campo Nombre';
        validation=false;
    }
    // Validar el campo lastname
    if(!lastname.value.trim()){
        // alert("Los campos Nombre, Apellido, Email y Password son obligatorios")
        document.querySelector("#error-lastname").textContent='Debe completar el campo Apellido';
        lastname.classList.add('error')
        validation=false;
    }
    // Validar el campo email
    if(!email.value.trim()){
        // alert("Los campos Nombre, Apellido, Email y Password son obligatorios")
        document.querySelector("#error-email").textContent='Debe completar el campo Email';
        email.classList.add('error')
        validation=false;
    }
    // Validar el campo password
    if(!password.value.trim()){
        // alert("Los campos Nombre, Apellido, Email y Password son obligatorios")
        document.querySelector("#error-password").textContent='Debe completar el campo contraseña';
        password.classList.add('error')
        validation=false;
    }else if(password.value.length < 6 || password.value.length > 12){
        document.querySelector("#error-password").textContent ='La contraseña debe contener entre 6 y 12 caracteres';
        password.classList.add('error')
        validation=false;
    }

    // Si no hay errores de validación, enviar el formulario
    if(validation){
        formRegister.submit()
    }
}


formRegister.addEventListener('submit',validarFormulario);