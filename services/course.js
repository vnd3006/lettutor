import { url_base } from "../api/connect";
import axios from "axios";
import errorHandle from '../bussiness/errorHandler'

export async function getListCourse(token, params) {

    try {
        const res = await axios.get(url_base + 'course', {
            params,
            headers: { 'Authorization': 'Bearer ' + token }
        })
        return res.data.data.rows;
    } catch (error) {
        errorHandle(error);
        return [];
    }
}