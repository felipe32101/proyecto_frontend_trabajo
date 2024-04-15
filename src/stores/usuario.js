import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useUsuarioStore = defineStore('usuario', () => {
  const usuarios = ref([]);
  const obtenerusuario = async () => {
    try {
      let responseusuario = await axios.get('usuario/usuario');
      usuarios.value = responseusuario.data.usuario;
      return responseusuario.data.usuario
    } catch (error) {
      throw error;
    }
  };
const recuperarcontraseña= async () => {
  try {
    let responsecontraseña= await axios.get('usuario/contraseña')
    return responsecontraseña
  } catch (error) {
    console.log("Error", error)
    
  }
}
  const postusuario = async (data) => {
    try {
      let res = await axios.post('usuario/agregar', data);
      return res;
    } catch (error) {
      throw error;
    }
  };
  
  const putEditarUsuario = async (id, data) => {
    try {
        console.log(id, data);

        let res = await axios.put(`usuario/usuario/${id}`, data);
        return res
    } catch (error) {
        throw error;
    }
};

  // const verificarCodigo = async (codigo) => {
  //   try {
  //     let response = await axios.post(usuario/confirmarcodigo/${codigo});
  //     console.log("Hola soy enviar codigo", response)
  //     return response;
  //   } catch (error) {
  //     console.log("Nokas pelotas v2", error);
  //   }
  // }
  const email = ref ("")
  const sendemail = async (correo) => {
    try {
      const response = await axios.get(
        `usuario/recuperar-codigo/${correo}`
      );
      console.log(response);
      email.value = correo
      return response;
    } catch (error) {
      console.log(error);
      }
  };
  const confirmarCodigo = async (codigo) => {
    try {
      const response = await axios.get(
        `usuario/confirmar-codigo/${codigo}`
      );
      console.log(response);

      return response;
    } catch (error) {
      console.log(error);
      if (error.message === "Network Error") {
        notificar("negative", "Sin conexión, por favor intente recargar");
        return null;
      }
      if (
        error.response.data.error === "No hay token en la peticion" ||
        error.response.data.error === "Token no válido" ||
        error.response.data.error.name === "TokenExpiredError"
      ) {
        salir();
        return null;
      }
      return error.response.data;
    }
  };

  const nuevaPassword = async (data) => {
    try {
      const response = await axios.put(`usuario/nueva-password`, data);
      console.log(response);

      return response;
    } catch (error) {
      console.log(error);
      if (error.message === "Network Error") {
        notificar("negative", "Sin conexión, por favor intente recargar");
        return null;
      }
      if (
        error.response.data.error === "No hay token en la peticion" ||
        error.response.data.error === "Token no válido" ||
        error.response.data.error.name === "TokenExpiredError"
      ) {
        notificar("negative", "Por favor vuelva a iniciar sesión");
        router.push("/");
        return null;
      }
      return error.response.data;
    }
  };
  const putusuarioInactivar = async (id) => {
    try {
      console.log(id, 'El usuario');

        let r= await axios.put(`usuario/inactivar/${id}`);
        console.log(r, 'El usuario');
        return r
    } catch (error) {
        console.log(error, 'Error al cambiar el estado de el usuario');

    }
  };
  
  const putusuarioActivar = async (id) => {
    try {
        let r= await axios.put(`usuario/activar/${id}`)
        return r
    } catch (error) {
        console.log(error, 'Error al cambiar el estado de el usuario');
    }
  };
  const token = ref("")
  const usuario = ref ([])
  const login = async (data) => {
    try {
        let r = await axios.post('usuario/login', data)
        console.log(r);
        usuario.value=r.data.usuarios
        console.log( r.data.token);
        token.value = r.data.token
        return r.status

    } catch (error) {
        console.log(error)
        return error.response.data
    }
  }
  return {
    usuarios, usuario, token, email,
    obtenerusuario, postusuario, login,putusuarioActivar, putusuarioInactivar, sendemail, recuperarcontraseña,confirmarCodigo,nuevaPassword, putEditarUsuario
  }
}, {
  persist: true,
});
