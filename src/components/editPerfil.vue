<template>
  <div class="container">
    <form class="form">
      <p class="title">Perfil</p>

      <div class="flex">
        <div class="avatar-container">
          <div class="avatar"></div>
        </div>
        <div class="profile-info">
          <h6 class="info-heading">Información del perfil</h6>

          <!-- Usamos un v-if para mostrar inputs en lugar de spans cuando se active el modo de edición -->
          <div class="info-row">
            <label class="info-label" for="username">Usuario:</label>
            <span v-if="!editMode" class="info-value">{{ username }}</span>
            <input v-else v-model="editUsername" class="info-value-input" type="text">
          </div>

          <div class="info-row">
            <label class="info-label" for="nombre">Nombre:</label>
            <span v-if="!editMode" class="info-value">{{ nombreUser }}</span>
            <input v-else v-model="editNombre" class="info-value-input" type="text">
          </div>

          <div class="info-row">
            <label class="info-label" for="cedula">Cedula:</label>
            <span v-if="!editMode" class="info-value">{{ cedulaUser }}</span>
            <input v-else v-model="editCedula" class="info-value-input" type="text">
          </div>

          <div class="info-row">
            <label class="info-label" for="correo">Correo:</label>
            <span v-if="!editMode" class="info-value">{{ correoUser }}</span>
            <input v-else v-model="editCorreo" class="info-value-input" type="text">
          </div>

          <div class="info-row">
            <label class="info-label" for="telefono">Telefono:</label>
            <span v-if="!editMode" class="info-value">{{ telefonoUser }}</span>
            <input v-else v-model="editTelefono" class="info-value-input" type="text">
          </div>

          <div class="info-row">
            <label class="info-label" for="rol">Rol:</label>
            <span class="info-value">{{ rolUser }}</span>
          </div>

          <!-- Repite lo mismo para los demás campos -->

        </div>
      </div>

      <div class="button-container">
        <router-link to="/inicio" class="button button-back">Volver</router-link>
        <!-- Cambiamos el tipo de botón y su texto según el modo de edición -->
        <button @click="handleEdit" type="button" class="button button-submit">
          {{ editMode ? 'Guardar' : 'Editar' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { useUsuarioStore } from '../stores/usuario.js'
import { ref } from "vue";

const useUsuario = useUsuarioStore()

let editMode = ref(false)

const username = useUsuario.usuario.usuario
const nombreUser = useUsuario.usuario.nombre
const cedulaUser = useUsuario.usuario.cedula
const correoUser = useUsuario.usuario.correo
const telefonoUser = useUsuario.usuario.telefono
const rolUser = useUsuario.usuario.rol
const idUsuario = String(useUsuario.usuario._id)

let editUsername = ref(username)
let editNombre = ref(nombreUser)
let editCedula = ref(cedulaUser)
let editCorreo = ref(correoUser)
let editTelefono = ref(telefonoUser)
let editIdUsuario = String(idUsuario)
async function saveChanges() {
  try {
    const response = await useUsuario.putEditarUsuario(idUsuario, {
      usuario: editUsername.value,
      nombre: editNombre.value,
      cedula: editCedula.value,
      correo: editCorreo.value,
      telefono: editTelefono.value,
    });
    console.log(response);

    // Si la actualización fue exitosa, cambia al modo de visualización
    editMode.value = false;
  } catch (error) {
    console.error("Error al guardar los cambios:", error);
    // Manejar el error, por ejemplo, mostrar un mensaje al usuario
  }
}

function handleEdit() {
  editMode.value = true;
  if (editMode.value) {
    saveChanges();
  }
}
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #265c1a;
}

.form {
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 600px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.flex {
  display: flex;
  align-items: center;
}

.avatar-container {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
}

.avatar {
  width: 100%;
  height: 100%;
  background-color: grey;
}

.profile-info {
  display: flex;
  flex-direction: column;
  width: 80%;
}

.info-heading {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
  justify-content: center; 
  display: flex; 
  margin-top: 15px;
}

.info-row {
  margin-bottom: 10px;
}

.info-label {
  font-weight: bold;
}

.info-value {
  margin-left: 10px;
}

.button-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 50px;
}

.button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button-back {
  background-color: #2e7d32;
  color: #fff;
  text-decoration: none;
}

.button-submit {
  background-color: #2e7d32;
  color: #fff;
}

.button:hover {
  background-color: #265c1a;
}

.info-value-input {
  margin-left: 10px;
  padding: 2px 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
</style>
