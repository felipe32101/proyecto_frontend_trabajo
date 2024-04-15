import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

export const useDependencia = defineStore('Dependecia', () => {
    const disDependencia = ref([]);
  
    const obtenerInfoDependencia = async () => {
        try {
            let responseDependencia = await axios.get('dependencia/dependencia');
            console.log(responseDependencia);
            return responseDependencia.data
        } catch (error) {
            throw error
        }
    };

    const postAgregarDependencia = async (data) => {
        try {
            console.log('d', data);
            let res = await axios.post('dependencia/agregar', data);
            return res
        } catch (error) {
            throw error
        }
    }

    const putEditarDependencia = async (id, data) => {
        try {
            console.log(id, data);
            let res = await axios.put(`dependencia/distribuciones/${id}`, data);
            console.log(res);
            return res
        } catch (error) {
            throw error;
        }
    };

    const putDisLoteFichaInactivar = async (id) => {
        try {
            let r = await axios.put(`dependencia/inactivar/${id}`)
            return r
        } catch (error) {
            console.log(error, 'Error al cambiar el estado de la dependencia');
        }
    }
    const putDisLoteFichaActivar = async (id) => {
        try {
            let r = await axios.put(`dependencia/activar/${id}`)
            return r
        } catch (error) {
            console.log(error, 'Error al cambiar el estado de la dependencia');
        }
    }

    return {
        disDependencia,
        obtenerInfoDependencia, postAgregarDependencia, putEditarDependencia,putDisLoteFichaInactivar, putDisLoteFichaActivar
    };
});