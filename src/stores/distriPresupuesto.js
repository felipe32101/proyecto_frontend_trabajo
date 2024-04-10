import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

export const usedistriPresupuesto = defineStore('Dislote_contrato', () => {
    const Dislote_contrato = ref([]);
  
    const obtenerInfoDislote_contrato = async () => {
        try {
            let responsedistripresupuesto = await axios.get(`dislote_contrato/dislote_contrato`);
            console.log(responsedistripresupuesto.data.disdependencia);
            disdependencia.value = responsedistripresupuesto.data.disdependencia;
            return responsedistripresupuesto.data.disdependencia
        } catch (error) {
            throw error
        }
    };

    const postAgregardislote_contrato = async (data) => {
        try {
            console.log('d', data);
            let res = await axios.post('dislote_contrato/agregar', data);
            return res
        } catch (error) {
            throw error
        }
    }

    const putEditardislote_contrato = async (id, data) => {
        try {
            console.log(id, data);
            let res = await axios.put(`dislote_contrato/Dislote_contrato/${id}`, data);
            console.log(res);
            return res
        } catch (error) {
            throw error;
        }
    };

    const putdislote_contratoInactivar = async (id) => {
        try {
            let r = await axios.put(`dislote_contrato/inactivar/${id}`)
            return r
        } catch (error) {
            console.log(error, 'Error al cambiar el estado de la ficha');
        }
    }
    const putdislote_contratoActivar = async (id) => {
        try {
            let r = await axios.put(`ficha/activar/${id}`)
            return r
        } catch (error) {
            console.log(error, 'Error al cambiar el estado de la ficha');
        }
    }

    return {
        Dislote_contrato,
        obtenerInfoDislote_contrato, postAgregardislote_contrato, putEditardislote_contrato,putdislote_contratoActivar, putdislote_contratoInactivar
    };
});