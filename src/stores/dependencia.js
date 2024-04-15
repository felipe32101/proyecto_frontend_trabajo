import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

export const useDepenStore = defineStore('dependencia', () => {
    const Dependencias = ref([]);
  
    const obtenerInfoDepen = async () => {
        try {
            const responseDepen = await axios.get('dependencia/dependencia');
            console.log(responseDepen.data.depen);
            Dependencias.value = responseDepen.data;
            return responseDepen.data.depen
        } catch (error) {
            throw error
        }
    };

    const postDepen = async (data) => {
        try {
            console.log("d", data);
            let res = await axios.post("dependencia/agregar", data);
            return res
        } catch (error) {
            throw error
        }
    }

    const putEditarDepen = async (id, data) => {
        try {
            console.log(id, data);

            let res = await axios.put(`dependencia/editar/${id}`, data);
            return res
        } catch (error) {
            throw error;
        }
    };

    const putInactivarDepen = async (id) => {
        try {
            let r = await axios.put(`dependencia/inactivar/${id}`)
            return r
        } catch (error) {
            console.log(error, "Error al cambiar el estado del lote");
        }
    }
    const putActivarDepen = async (id) => {
        try {
            let r = await axios.put(`dependencia/activar/${id}`)
            return r
        } catch (error) {
            console.log(error, "Error al cambiar el estado del lote");
        }
    }

    return {
        Dependencias,
        obtenerInfoDepen, postDepen, putEditarDepen, putActivarDepen, putInactivarDepen
    };
});