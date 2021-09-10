import axios from './axios'

export default function (app) {
    app.config.globalProperties.$axios = axios
}
