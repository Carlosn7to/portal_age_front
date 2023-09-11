import VueAxios from 'axios'
import Cookie from "js-cookie";

export const AXIOS = VueAxios.create({
    baseURL: `https://v1.ageportal.agetelecom.com.br/api/`,
    // baseURL: `http://localhost:8000/api/`,
    headers: {
        'Authorization': 'Bearer '+Cookie.get('token'),
    }

})