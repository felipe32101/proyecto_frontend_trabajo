
<template>
  <div class="body" v-if="!activar">
        <div class="container">
            <h2>Recuperar contraseña</h2>
            <p class="texto1">Por favor, introduce la dirección de correo electrónico asociada a tu
                cuenta de Gmail. Te enviaremos un enlace seguro para restablecer tu
                contraseña.</p>
            <q-form @submit="enviarCorreo">
                <div class="contenedor1">
                    <h1 style="font-size: 20px; height: 50px;">Ingrese su correo electrónico</h1>
                    <div class="contenedor_input">
                        <input type="email" class="input1" placeholder="Correo electrónico" v-model="correo"
                            required />
                    </div>
                    <div class="contenedor2">
                     <button  style="height: 40px; width:150px;" type="submit"
                            >Enviar correo</button>
                        <router-link to="/"><button class="volver">Volver</button></router-link>
                    </div>
                </div>
            </q-form>
        </div>
    </div>
  </template>
<script setup>
 import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUsuarioStore } from "../stores/usuario.js";
// import Codigo from './CodigoRecuperar.vue';
import { Cookies } from 'quasar';


// const correo = ref('');
// const codigoVerificacion = ref('');

const useUsuario = useUsuarioStore();
const correo = ref();

// const activar = ref(false)

const router = useRouter()
async function enviarCorreo(){
    try {
        const r = await useUsuario.sendemail(correo.value)
        console.log(r);

        if(r.status===200) {
           router.push('/correo')
        }
        Cookies.set('correo', correo.value, {expires: 1})
    } catch (error) {
        console.log(error);
    }
}

// const correoValido = computed(() => {
//     return !!correo.value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value);
// });

// const codigoValido = computed(() => {
//     return !!codigoVerificacion.value;
// });
</script>

<style scoped>

.container {
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #209616;
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
  width: 60vh;
  background-color: #fff;
  border-radius: 20px;
  align-items: center;
}

.title {
  font-size: 28px;
  color: #209616;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
}

.title::before,
.title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0;
  background-color: #209616;
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

.message,
.signin {
  color: rgba(88, 87, 87, 0.822);
  font-size: 14px;
  text-align: center;
}

.signin {
  text-align: center;
}

.signin a {
  color: royalblue;
  text-decoration: none;
}

.signin a:hover {
  text-decoration: underline royalblue;
}

.flex{
    display: flex;
    width: 100%;
    gap: 10px;
    align-items: center;
    justify-content: center;
}

.form label {
  position: relative;
}

.form label .input{
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

select{
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
  color: green;
}

.submit {
  border: none;
  outline: none;
  background-color: #209616;
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
  background-color: #209616;
  padding: 10px;
  border-radius: 10px;
  color: fff;
  font-size: 16px;
  
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