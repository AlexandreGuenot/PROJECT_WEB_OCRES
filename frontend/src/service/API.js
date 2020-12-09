import axios from 'axios';
const URL = 'http://localhost:3001';


export const getSommeils = () => {
    return axios.get(URL + "/sommeil");

}


export const createSommeil = (date, temps) => {
    return axios.post(URL + "/sommeil", { date, temps })
}

export const listSommeil = () => {
    return axios.get(URL + "/sommeil/list");
}

export const deleteSommeil = (sommeilId) => {
    return axios.delete(URL + '/sommeil/' + sommeilId)
}

export const updateSommeil = (sommeil) => {
    return axios.put(URL + '/sommeil/' + sommeil._id, sommeil)
}

export const listStep = () => {
    return axios.get(URL + "/step");
}


export const createStep = (titre, valeur) => {
    return axios.post(URL + "/step", { titre, valeur })
}


export const deleteStep = (stepId) => {
    return axios.delete(URL + '/step/' + stepId)
}

export const updateStep = (step) => {
    return axios.put(URL + '/step/' + step._id, step)
}

export const listConsommation = () => {
    return axios.get(URL + "/consommation");
}


export const createConsommation = (titre, valeur) => {
    return axios.post(URL + "/consommation", { titre, valeur })
}


export const deleteConsommation = (consommationId) => {
    return axios.delete(URL + '/consommation/' + consommationId)
}

export const updateConsommation = (consommation) => {
    return axios.put(URL + '/consommation/' + consommation._id, consommation)
}


export const listVisite = () => {
    return axios.get(URL + "/visite");
}


export const createVisite = (titre, valeur) => {
    return axios.post(URL + "/visite", { titre, valeur })
}


export const deleteVisite = (visiteId) => {
    return axios.delete(URL + '/visite/' + visiteId)
}

export const updateVisite = (visite) => {
    return axios.put(URL + '/visite/' + visite._id, visite)
}

export const listEcran = () => {
    return axios.get(URL + "/ecran");
}


export const createEcran = (titre, valeur) => {
    return axios.post(URL + "/ecran", { titre, valeur })
}


export const deleteEcran = (ecranId) => {
    return axios.delete(URL + '/ecran/' + ecranId)
}

export const updateEcran = (ecran) => {
    return axios.put(URL + '/ecran/' + ecran._id, ecran)
}


export const listSport = () => {
    return axios.get(URL + "/sport");
}


export const createSport = (titre, valeur) => {
    return axios.post(URL + "/sport", { titre, valeur })
}


export const deleteSport = (sportId) => {
    return axios.delete(URL + '/sport/' + sportId)
}

export const updateSport = (sport) => {
    return axios.put(URL + '/sport/' + sport._id, sport)
}

