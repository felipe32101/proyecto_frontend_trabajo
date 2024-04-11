import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

export const useDistriLoteFicha = defineStore('dislote_depen', () => {
    const disLoteFicha = ref([]);
  
    const obtenerInfodislote_depen = async () => {
        try {
            let responseDisLoteFicha = await axios.get('dislote_depen/all');
            console.log(responseDisLoteFicha);
            return responseDisLoteFicha.data
        } catch (error) {
            throw error
        }
    };

    const postAgregardisLoteFicha = async (data) => {
        try {
            console.log('d', data);
            let res = await axios.post('dislote_depen/guardar', data);
            return res
        } catch (error) {
            throw error
        }
    }

    const putEditarDisLoteFicha_pre = async (id, data) => {
        try {
            console.log(id, data);
            let res = await axios.put(`dislote_depen/distribuciones/${id}`, data);
            console.log(res);
            return res
        } catch (error) {
            throw error;
        }
    };

    const putDisLoteFichaInactivar = async (id) => {
        try {
            let r = await axios.put(`dislote_depen/distribuciones/desactivar/${id}`)
            return r
        } catch (error) {
            console.log(error, 'Error al cambiar el estado de la ficha');
        }
    }
    const putDisLoteFichaActivar = async (id) => {
        try {
            let r = await axios.put(`dislote_depen/distribuciones/activar/${id}`)
            return r
        } catch (error) {
            console.log(error, 'Error al cambiar el estado de la ficha');
        }
    }

    return {
        disLoteFicha,
        obtenerInfodislote_depen, postAgregardisLoteFicha, putEditarDisLoteFicha_pre,putDisLoteFichaInactivar, putDisLoteFichaActivar
    };
});