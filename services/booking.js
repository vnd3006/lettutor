import { url_base } from "../api/connect";
import axios from "axios";
import { showMessage } from "react-native-flash-message";
import errorHandle from "../Bussiness/ErrorHandler";

export async function editRequest(studentRequest, bookedId, token) {
    try {
        const res = await axios.post(url_base + 'booking/student-request/' + bookedId, {
            studentRequest
        }, {
            headers: { 'Authorization': 'Bearer ' + token }
        })
        showMessage({ type: 'success', message: 'Update request successfully' })
        return true;
    } catch (error) {
        errorHandle(error);
        return false;
    }
}

export async function cancelLesson(scheduleDetailIds, token) {
    console.log(scheduleDetailIds);
    try {
        axios.delete()
        const res = await axios.delete(url_base + 'booking', {
            headers: { 'Authorization': 'Bearer ' + token },
            data: {
                scheduleDetailIds
            }
        })
        showMessage({ type: 'success', message: 'Cancel lesson successfully' })
        return true;
    } catch (error) {
        errorHandle(error);
        return false;
    }
}

export async function bookingLesson(scheduleDetailIds, note, token) {
    try {
        const res = await axios.post(url_base + 'booking', {
            scheduleDetailIds,
            note
        }, {
            headers: { 'Authorization': 'Bearer ' + token }

        })
        return true;
    } catch (error) {
        errorHandle(error);
        return false;
    }
}