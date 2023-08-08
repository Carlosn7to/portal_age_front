import Cookie from "js-cookie";
import {AXIOS} from "../api.ts";
import store from '@/store';

export default {
    auth(to, from, next) {
        const TOKEN = Cookie.get('token')

        AXIOS({
            method: "get",
            url: "validatedToken",
            headers: {
                'Authorization': 'Bearer '+TOKEN
            }
        })
            .then((res) => {
                if(res.data.status === true) {
                    sessionStorage.setItem('portal_permission', res.data.levelAccess)
                    store.commit('SAVE_SYSTEM', {login: true})
                    return next()
                }

            }).catch(() => {
            store.commit('SAVE_SYSTEM', {login: false})

            return next({ path: '/'})
        })
    },
    management_portal(to, from, next) {
        const PERMISSION = sessionStorage.getItem('portal_permission')

        if(PERMISSION === 'Admin' || PERMISSION === 'Master') {
            return next()
        }

        return next({ path: '/sistemas'})

    },
    permission_report(to, from, next) {
        const TOKEN = Cookie.get('token')
        AXIOS({
            method: 'get',
            url: 'agereport/Access',
            headers: {
                'Authorization': 'Bearer'+TOKEN
            }
        }).then((res) => {
            store.commit('SAVE_PERMISSION', {permission: {system: 'ageReport', level: res.data.levelAccess, function: res.data.function}})
            return next()
        }).catch(() => {
            store.commit('SAVE_ALERT', {msg: 'Você não pode acessar o sistema AgeReport.', type: 'warning', display: true})
            store.commit('SAVE_SYSTEM', {loading: false})
            return next({ path: '/sistemas'})
        })

    },
    permission_rv(to, from, next) {
        const TOKEN = Cookie.get('token')

        AXIOS({
            method: 'get',
            url: 'agerv/Access',
            headers: {
                'Authorization': 'Bearer'+TOKEN
            }
        }).then((res) => {
            store.commit('SAVE_PERMISSION', {permission: {system: 'ageRv', level: res.data.levelAccess, function: res.data.function}})
            return next()
        }).catch(() => {
            store.commit('SAVE_ALERT', {msg: 'Você não pode acessar o sistema AgeRv.', type: 'warning', display: true})
            store.commit('SAVE_SYSTEM', {loading: false})
            return next({ path: '/sistemas'})
        })
    },
    permission_board(to, from, next) {
        const TOKEN = Cookie.get('token')

        AXIOS({
            method: 'get',
            url: 'ageboard/Access',
            headers: {
                'Authorization': 'Bearer'+TOKEN
            }
        }).then((res) => {
            store.commit('SAVE_PERMISSION', {permission: {system: 'ageBoard', level: res.data.levelAccess, function: res.data.function}})
            return next()
        }).catch(() => {
            store.commit('SAVE_ALERT', {msg: 'Você não pode acessar o sistema AgeBoard.', type: 'warning', display: true})
            store.commit('SAVE_SYSTEM', {loading: false})
            return next({ path: '/sistemas'})
        })
    },
    permission_control(to, from, next) {
        const TOKEN = Cookie.get('token')

        AXIOS({
            method: 'get',
            url: 'agecontrol/Access',
            headers: {
                'Authorization': 'Bearer'+TOKEN
            }
        }).then((res) => {
            store.commit('SAVE_PERMISSION', {permission: {system: 'ageBoard', level: res.data.levelAccess, function: res.data.function}})
            return next()
        }).catch(() => {
            store.commit('SAVE_ALERT', {msg: 'Você não pode acessar o sistema AgeControl.', type: 'warning', display: true})
            store.commit('SAVE_SYSTEM', {loading: false})
            return next({ path: '/sistemas'})
        })
    }

}