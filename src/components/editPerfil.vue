<template>
    <div class="container">
      <form class="form" >
        <p class="title">Perfil</p>
  
        <div class="flex">
          <div style="padding: 50px;">
            <div style="width: 350px; height: 350px; border-radius: 300px; background-color: grey; padding: "></div>
          </div>
          <div style="padding: 50px;">
            <h6 style="margin: 0; margin-bottom: 15px;">Información del perfil</h6>

            <label style="font-size: 20px;" for="">Usuario:</label>
            <label style="font-size: 20px; padding-left: 10px;" for=""> {{ username }}</label> 
            <br>

            <label for="" style="font-size: 20px;">Nombre:</label>
            <label style="font-size: 20px; padding-left: 10px;" for=""> {{ nombreUser }}</label> 
            <br>

            <label for="" style="font-size: 20px;">Cedula:</label>
            <label style="font-size: 20px; padding-left: 10px;" for=""> {{ cedulaUser }}</label> 
            <br>

            <label for="" style="font-size: 20px;">Correo:</label>
            <label style="font-size: 20px; padding-left: 10px;" for=""> {{ correoUser }}</label> 
            <br>

            <label for="" style="font-size: 20px;">Telefono:</label>
            <label style="font-size: 20px; padding-left: 10px;" for=""> {{ telefonoUser }}</label> 
            <br>
          </div>
        </div>
        <div class="bot">
        <button class="button2">
          <router-link to="/inicio">
            <span class="lable">Volver</span>
              </router-link>
        </button>
        <button type="submit" class="submit">Aceptar</button>
      </div><br>
      </form>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  import images from "../assets/fondo12.png";
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { useQuasar } from "quasar";
  import { useUsuarioStore} from '../stores/usuario.js'
  const $q = useQuasar();
  
  
  let notification = ref(null);
  const notify = (message, type) => {
    notification = $q.notify({
      message: message,
      timeout: 1500,
      type: type
    
    });
  };
  
  let nombre = '';
  let cedula = '';
  let telefono = '';
  let usuario = '';
  let correo = '';
  let password = '';
  let rol = '';
  
  const usuarioAgregado = ref(false);
  const router = useRouter();
  
  function mostrarErrores(msg) {
    notification = $q.notify({
      type: 'negative',
      message: msg,
      timeout: 2000,
    });
  };
  
  const validarTelefono = (telefono) => {
    const telefonoRegex = /^\d{10}$/; // Expresión regular para validar 10 dígitos numéricos
    return telefonoRegex.test(telefono);
  };
  
  const validarCedula = (telefono) => {
    const cedulaRegex = /^\d{10}$/; // Expresión regular para validar 10 dígitos numéricos
    return cedulaRegex.test(telefono);
  };
  
  const validarCorreo = (correo) => {
    return correo.includes('@'); // Verificar si el correo contiene al menos una arroba
  };
  
  
  /* const registrarUsuario = async () => {
    try {
  
      if (!validarTelefono(telefono)){
        mostrarErrores("el numero de telefono debe tener 10 caracteres")
        return;
      } 
  
      if (!validarCedula(cedula)) {
        mostrarErrores("La cédula debe tener exactamente 10 dígitos");
        return;
      }
  
      if (!validarCorreo(correo)) {
        mostrarErrores("El correo electrónico debe contener al menos una arroba");
        return;
      }
      const response = await axios.post('https://backend-abxx.onrender.com/usuario/agregar', {
        nombre,
        cedula,
        telefono,
        correo,
        usuario,
        password,
        rol
      });
  
      if (registrarUsuario.error) {
            setTimeout(() => {
            mostrarErrores(registrarUsuario.error.errors[0].msg);
              error.value = ""; // Limpiar el mensaje de error después de 2 segundos
            }, 2000);
            return;
          }
  
  
      notify("Usuario Agregado", "positive")
      console.log(response.data);
  
      nombre = '';
      cedula = '';
      telefono = '';
      correo = '';
      usuario = '';
      password = '';
      rol = '';
      
      usuarioAgregado.value = true;
      router.push('/Usuario');
    } catch (error) {
      notify("La cedula ya se encuentra registrada en la base de datos", "negative")
  
      console.error(error);
    }
  }; */

const useUsuario = useUsuarioStore()

const username = useUsuario.usuario.usuario
const nombreUser = useUsuario.usuario.nombre
const cedulaUser = useUsuario.usuario.cedula
const correoUser = useUsuario.usuario.correo
const telefonoUser = useUsuario.usuario.telefono


  </script>
  
  <style scoped>
  .container {
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: #2e7d32;
    align-items: center;
    justify-content: center;
  }
  
  .centeimg {
    display: flex;
    justify-content: center;
  }
  
  .fondo {
    height: 100px;
    width: 100px;
    margin: 25px;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    min-width: 60vh;
    background-color: #fff;
    border-radius: 20px;
    align-items: center;
  }
  
  .title {
    font-size: 28px;
    color: #2e7d32;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
    margin-top: 15px;
  }
  
  .title::before,
  .title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0;
    background-color: #2e7d32;
  }
  
  .title::before {
    width: 18px;
    height: 18px;
    background-color: royalblue;
  }
  
  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }
  
  .flex {
    display: flex;
    width: 100%;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }
  
  .form label {
    position: relative;
  }
  
  .form label .input {
    width: 200px;
    height: 50px;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }
  
  .form label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }
  
  select {
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
    font-weight: 600;
  }
  
  .form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }
  
  .form label .input:focus + span,
  .form label .input:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }
  
  .form label .input:valid + span {
    color: #2e7d32;
  }
  
  .submit {
    border: none;
    outline: none;
    background-color: #2e7d32;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: 0.3s ease;
  }
  
  .submit:hover {
    background-color: rgb(56, 90, 194);
  }
  
  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }
  
    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
  
  label .select {
    width: 100%;
    padding: 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
    
  }
  
  label .select + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
    
  }
  
  label .select:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
    
  }
  
  label .select:focus + span,
  label .select:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
    
  }
  
  label .select:valid + span {
    color: green;
    
  }
  
  
  .button2 {
    border: none;
    outline: none;
    background-color: #2e7d32;
    padding: 10px;
    border-radius: 10px;
    color: fff;
    font-size: 16px;
    transform: 0.3s ease;
    
  }
  
  .lable {
    color: #fff;
  }
  a{
    text-decoration: none;
  }
  .button2:hover {
    background: #264cf8e1;
  }
  
  .bot {
      display: flex;
      gap: 25px;
  }
  
  
  </style>