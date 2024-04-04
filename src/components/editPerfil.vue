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

          <div class="info-row">
            <label class="info-label" for="username">Usuario:</label>
            <span class="info-value">{{ username }}</span>
          </div>

          <div class="info-row">
            <label class="info-label" for="nombre">Nombre:</label>
            <span class="info-value">{{ nombreUser }}</span>
          </div>

          <div class="info-row">
            <label class="info-label" for="cedula">Cédula:</label>
            <span class="info-value">{{ cedulaUser }}</span>
          </div>

          <div class="info-row">
            <label class="info-label" for="correo">Correo:</label>
            <span class="info-value">{{ correoUser }}</span>
          </div>

          <div class="info-row">
            <label class="info-label" for="telefono">Teléfono:</label>
            <span class="info-value">{{ telefonoUser }}</span>
          </div>
        </div>
      </div>

      <div class="button-container">
        <router-link to="/inicio" class="button button-back">Volver</router-link>
        <button type="submit" class="button button-submit">Aceptar</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useUsuarioStore } from '../stores/usuario.js'

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
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
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
  margin-bottom: 20px;
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
  margin-left: 40px;
}

.info-heading {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
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
</style>
