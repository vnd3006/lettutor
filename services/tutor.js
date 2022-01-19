import { url_base } from "../api/connect";
import axios from "axios";
import errorHandle from '../bussiness/errorHandler'
import { getBookingData } from "../bussiness/scheduleHandle";

export async function favorAction(id, token) {
    try {
        const res = await axios.post(url_base + 'user/manageFavoriteTutor', {
            tutorId: id
        }, { headers: { 'Authorization': 'Bearer ' + token } })
        return true;
    } catch (error) {
        errorHandle(error);
        return false;
    }
}

export async function reportTutor(content, id, token) {
    try {
        const res = await axios.post(url_base + 'report', {
            tutorId: id,
            content
        }, { headers: { 'Authorization': 'Bearer ' + token } })
        return true;
    } catch (error) {
        errorHandle(error);
        return false;
    }
}

export function getFavourData(token) {
    return axios.get(url_base + 'tutor/more', {
        params: {
            perPage: 1,
            page: 1
        },
        headers: { 'Authorization': 'Bearer ' + token }
    });
}

export async function getListTutor(page, itemPerPage, token) {
    try {
        const res = await axios.get(url_base + 'tutor/more', {
            params: {
                perPage: itemPerPage,
                page
            },
            headers: { 'Authorization': 'Bearer ' + token }
        });
        return res.data
    } catch (error) {
        errorHandle(error);
        return null;
    }
}

export async function getScheduleByID(id, token) {
    try {
        const res = await axios.post(url_base + 'schedule', { tutorId: id }, { headers: { 'Authorization': 'Bearer ' + token } });
        return getBookingData(res.data.data);
    } catch (error) {
        console.log(error);
        errorHandle(error);
        return null;
    }
}

export async function searchTutor(token, params) {
    try {
        const res = await axios.post(url_base + 'tutor/search',
            params, {
                headers: { 'Authorization': 'Bearer ' + token }
            });
        return res.data
    } catch (error) {
        errorHandle(error);
        return null;
    }
}

export function getListTopic(token) {
    return axios.get(url_base + 'learn-topic', {
        headers: { 'Authorization': 'Bearer ' + token }
    })
}

export function getListPreTest(token) {
    return axios.get(url_base + 'test-preparation', {
        headers: { 'Authorization': 'Bearer ' + token }
    })
}