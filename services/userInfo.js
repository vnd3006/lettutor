import { showMessage } from 'react-native-flash-message';
import FormData from 'form-data';
import { url_base } from "../api/connect";
import axios from "axios";
import errorHandle from '../bussiness/errorHandler'

export async function updateAvatar(token, imgData) {
    try {
        let data = new FormData();
        data.append('avatar', {
            uri: imgData.uri,
            type: imgData.type,
            name: imgData.fileName
        })
        const res = await axios.post(url_base + 'user/uploadAvatar', data, {
            headers: { 'Authorization': 'Bearer ' + token }
        })
        showMessage({ type: 'success', message: 'Upload avatar successfully' })
        return true;
    } catch (error) {
        errorHandle(error);
        return false;
    }

}
export async function getUserInfo(token) {
    try {
        const res = await axios.get(url_base + 'user/info', {
            headers: { 'Authorization': 'Bearer ' + token }
        })

        return res.data.user;
    } catch (error) {
        errorHandle(error);
        return null;
    }
}

export async function becomeTutor(data, token) {
    try {
        const params = new FormData()
        for (var key in data) {
            console.log({ key })
            console.log(data[key])
            if (key == 'avatar' || key == 'video')
                continue;
            if (key == 'languages') {
                // var result = '';
                // data[key].forEach(item => result += item + ', ')
                // params.append(key, result.substring(0, result.length - 2))
                // console.log('languages: ' + result);
                params.append(key, ['Vietnamese', 'English'])
                continue
            }
            if (key == 'specialties') {

                params.append(key, 'english-for-kids,business-english');
                continue
            }
            params.append(key, data[key]);
        }
        const videoInfo = data.video;
        console.log(videoInfo);
        params.append('video', {
            // name: videoInfo.fileName,
            name: 'introVideo.mp4',
            uri: videoInfo.uri,
            type: videoInfo.type
        })
        const imageInfo = data.avatar;
        console.log(imageInfo)
        params.append('avatar', {
            name: imageInfo.fileName,
            uri: imageInfo.uri,
            type: imageInfo.type
        })
        params.append('price', 5000);
        console.log(params);
        const res = await axios.post(url_base + 'tutor/register', params, {
            headers: { 'Authorization': 'Bearer ' + token },
        })
        return res;
    } catch (error) {
        errorHandle(error)
        return null;
    }

}