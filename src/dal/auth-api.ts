import {LoginValues} from '../bll/auth-reducer';
import {instance} from './api';

export const authAPI = {
    authMe() {
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
