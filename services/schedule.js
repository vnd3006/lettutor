import { url_base } from "../api/connect";
import axios from "axios";
import errorHandle from '../bussiness/errorHandler'

export async function getNext(token) {
    const today = new Date();

    console.log(today.setMinutes(today.getMinutes()));
    try {
        const res = await axios.get(url_base + 'booking/next', {
            params: { dateTime: today.valueOf() },
            headers: { 'Authorization': 'Bearer ' + token }
        });
        return res.data.data[0];
    } catch (error) {
        errorHandle(error);
        return null;
    }
}

export async function getTotal(token) {
    try {
        const res = await axios.get(url_base + 'call/total', {
            headers: { 'Authorization': 'Bearer ' + token }
        });
        return res.data.total;
    } catch (error) {
        errorHandle(error);
        return 0;
    }
}

export async function getHistorySchedule(token, page) {
    const today = new Date()
    const paramDate = new Date(today.setMinutes(today.getMinutes()));
    console.log(paramDate.valueOf())
    try {
        const res = await axios.get(url_base + 'booking/list/student', {
            params: {
                page,
                perPage: 20,
                dateTimeLte: paramDate.getTime(),
                orderBy: 'meeting',
                sortBy: 'desc'
            },
            headers: { 'Authorization': 'Bearer ' + token }
        })
        return res.data.data.rows;

    } catch (error) {
        errorHandle(error);
        return []
    }
}

export async function getUpcomingSchedule(token, page, perPage) {
    const today = new Date()
    const paramDate = new Date(today.setMinutes(today.getMinutes()));
    try {
        const res = await axios.get(url_base + 'booking/list/student', {
            params: {
                page,
                perPage,
                dateTimeGte: paramDate.getTime(),
                orderBy: 'meeting',
                sortBy: 'asc'
            },
            headers: { 'Authorization': 'Bearer ' + token }
        })
        const data = res.data.data
        if (data.rows.length > 0) {
            data.rows[0].isFirst = true;
        }
        return data;

    } catch (error) {
        errorHandle(error);
        return []
    }
}