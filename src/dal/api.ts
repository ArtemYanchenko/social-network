import axios from 'axios';
import {LoginValues} from '../bll/auth-reducer';
import {PhotosType} from '../bll/profile-reducer';
import {ResultCodeForCaptcha, ResultCodesEnum} from '../common';

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
})









//types
export type ResponseType<T = {}> = {
    resultCode: ResultCodesEnum | ResultCodeForCaptcha
    messages: string[]
    fieldsErrors: Array<string>
    data: T
}