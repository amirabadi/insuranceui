import * as axios from 'axios';
import {config} from "./config";

class Ajax {

    static async getAll(data) {
        const response = await axios({
            method: 'GET',
            url: `${config.baseUrl}${data.url}`,

        }).then((res) => {

            return res
        });
        return response;

    }
    static async getAllPage(data) {
        const z=detectBody(data.data);
        const response = await axios({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            url: `${config.baseUrl}${data.url}`,
            data:z,
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