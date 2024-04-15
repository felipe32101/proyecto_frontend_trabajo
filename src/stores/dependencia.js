import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

<<<<<<< HEAD
export const useDependencia = defineStore('Dependecia', () => {
    const disDependencia = ref([]);
  
    const obtenerInfoDependencia = async () => {
        try {
            let responseDependencia = await axios.get('dependencia/dependencia');
            console.log(responseDependencia);
            return responseDependencia.data
=======
export const useDepenStore = defineStore('dependencia', () => {
    const Dependencias = ref([]);
  
    const obtenerInfoDepen = async () => {
        try {
            const responseDepen = await axios.get('dependencia/dependencia');
            console.log(responseDepen.data.depen);
            Dependencias.value = responseDepen.data;
            return responseDepen.data.depen
>>>>>>> 7f69e38857195acc0552952716b5573704e684c3
        } catch (error) {
            throw error
        }
    };

<<<<<<< HEAD
    const postAgregarDependencia = async (data) => {
        try {
            console.log('d', data);
            let res = await axios.post('dependencia/agregar', data);
=======
    const postDepen = async (data) => {
        try {
            console.log("d", data);
            let res = await axios.post("dependencia/agregar", data);
>>>>>>> 7f69e38857195acc0552952716b5573704e684c3
            return res
        } catch (error) {
            throw error
        }
    }

<<<<<<< HEAD
    const putEditarDependencia = async (id, data) => {
        try {
            console.log(id, data);
            let res = await axios.put(`dependencia/distribuciones/${id}`, data);
            console.log(res);
=======
    const putEditarDepen = async (id, data) => {
        try {
            console.log(id, data);

            let res = await axios.put(`dependencia/editar/${id}`, data);
>>>>>>> 7f69e38857195acc0552952716b5573704e684c3
            return res
        } catch (error) {
            throw error;
        }
    };

<<<<<<< HEAD
    const putDisLoteFichaInactivar = async (id) => {
=======
    const putInactivarDepen = async (id) => {
>>>>>>> 7f69e38857195acc0552952716b5573704e684c3
        try {
            let r = await axios.put(`dependencia/inactivar/${id}`)
            return r
        } catch (error) {
<<<<<<< HEAD
            console.log(error, 'Error al cambiar el estado de la dependencia');
        }
    }
    const putDisLoteFichaActivar = async (id) => {
=======
            console.log(error, "Error al cambiar el estado del lote");
        }
    }
    const putActivarDepen = async (id) => {
>>>>>>> 7f69e38857195acc0552952716b5573704e684c3
        try {
            let r = await axios.put(`dependencia/activar/${id}`)
            return r
        } catch (error) {
<<<<<<< HEAD
            console.log(error, 'Error al cambiar el estado de la dependencia');
=======
            console.log(error, "Error al cambiar el estado del lote");
>>>>>>> 7f69e38857195acc0552952716b5573704e684c3
        }
    }

    return {
<<<<<<< HEAD
        disDependencia,
        obtenerInfoDependencia, postAgregarDependencia, putEditarDependencia,putDisLoteFichaInactivar, putDisLoteFichaActivar
=======
        Dependencias,
        obtenerInfoDepen, postDepen, putEditarDepen, putActivarDepen, putInactivarDepen
>>>>>>> 7f69e38857195acc0552952716b5573704e684c3
    };
});