import axios from 'axios';
import {LoginValues} from '../bll/auth-reducer';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
})


export const usersAPI = {
    getUsers(pageSize: number = 10, currentPage: number = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(res => res.data);
    },
    followUser(id: number) {
        return instance.post(`follow/${id}`, {})
            .then(res => res.data)
    },
    unfollowUser(id: number) {
        return instance.delete(`follow/${id}`)
            .then(res => res.data)
    }

}


export const profileAPI = {
    getProfilePage(id: string) {
        return instance.get(`profile/${id}`)
            .then(res => res.data)
    }
}


export const authAPI = {
    authMe() {
        debugger
        return instance.get('auth/me')
            .then(res => res.data)

    },
    login(values: LoginValues) {
        return instance.post('auth/login', {...values})
            .then(res => res.data)
    },
    logout() {
        return instance.delete('auth/login')
            .then(res => res.data)
    }
}