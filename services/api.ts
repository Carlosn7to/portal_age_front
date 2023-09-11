import VueAxios from 'axios'
import Cookie from "js-cookie";

export const AXIOS = VueAxios.create({
    baseURL: `https://v1.ageportal.agetelecom.com.br/api/`,
    // baseURL: `http://localhost:8000/api/`,
    //baseURL: `http://v1.portal.tote.local/api`,
    headers: {
        'Authorization': 'Bearer '+Cookie.get('token'),
    }

})