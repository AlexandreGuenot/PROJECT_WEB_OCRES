import axios from 'axios';
const URL = 'http://localhost:3001';


export const getSommeils = () => {
    return axios.get(URL + "/sommeil");

}


export const createSommeil = (date, temps) => {
    return axios.post(URL + "/sommeil", { date, temps })
}