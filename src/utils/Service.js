import axios from "axios";
import { BASE_URL } from "../../config.development";

export function sendRequest (path) {
    return axios.get(`${BASE_URL}${path}`)
}

export function sendPostRequest (path, data) {
    console.log(data)

    const headers = {'Content-Type': 'application/json'}

    return (
        axios.post(`${BASE_URL}${path}`, data, {
            headers: headers
        })
    )
}

export function sendPatchRequest (path, data) {
    console.log(data)

    const headers = {'Content-Type': 'application/json'}

    return (
        axios.patch(`${BASE_URL}${path}`, data, {
            headers: headers
        })
    )
}

export function sendDeleteRequest (path, data) {
    console.log(data)

    const headers = {'Content-Type': 'application/json'}

    return (
        axios.delete(`${BASE_URL}${path}`,  {
            data: data,
            headers: headers
        })
    )
}
