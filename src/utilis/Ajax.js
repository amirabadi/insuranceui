import * as axios from 'axios';
import {config} from "./config";
import Auth from "../shared/services/Auth";
import Cookies from 'js-cookie';

class Ajax {
    static async getAll(data) {
        const response = await axios({
            headers: {
                'Authorization': Auth.token(),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET',
            url: `${config.baseUrl}${data.url}`,

        }).then((res) => {

            return res
        });
        return response;

    }

    static async postUP(data) {
        const response = await axios({
            method: 'POST',
            headers: {
                'Authorization': Auth.token(),
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                userName: data.userName,
                password: data.password
            },
            url: `${config.baseUrl}${data.url}`,

        }).then((res) => {
            console.log(res);
            return res
        });
        let i = 0;
        console.log(response.headers);

        return response;
    }


    static async post(data) {

        const z = detectBody(data.data);
        const response = await axios({
            method: 'POST',
            withCredentials: true,
            headers: {
                'Authorization': Auth.token(),
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },
            url: `${config.baseUrl}${data.url}`,
            data: z,
        }).then((res) => {
            const t=Cookies.get('XSRF-TOKEN');
            //  console.log(res);
            Cookies.set('XSRF-TOKEN', t, { expires: 7, path: '' });
            return res;
        });

        let i = 0;
        console.log(response.headers);

        return response;
    }

    static async getAllPage(data) {
        const z = detectBody(data.data);
        const response = await axios({
            method: 'POST',
            withCredentials: true,
            credentials:'include',
            headers: {
                'Authorization': Auth.token(),
                 'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            url: `${config.baseUrl}${data.url}`,
            data: z,
        }).then((res) => {
            return res
        });
        return response;

    }
}

const type = {
    Json: 'json',
    Form: 'form'
}

const detectBody = (body) => {
    let result = null;
    let typeBody = type.Json;
    for (const [key, value] of Object.entries(body)) {
        if (value instanceof File) {
            typeBody = type.Form;
            break
        }
    }

    if (typeBody === type.Json) {
        result = JSON.stringify(body);
    } else {
        let formData = new FormData();
        for (const [key, value] of Object.entries(body)) {
            formData.append(key, value);
            console.log('ok')
        }
        result = formData;
    }

    return result;
}
export default Ajax;