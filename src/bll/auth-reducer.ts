import {authAPI} from '../dal/api';
import {AppDispatch} from './redux-store';
import {UsersType} from './user-reducer';

export type UserInfoType = {
    id: number | null
    email: string | null
    login: string | null
}
type InitialStateType = UserInfoType & {
    isLoggedIn: boolean
}


const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isLoggedIn: false
}

type ActionsTypes = SetUserDataType | SetLoginType | SetLogoutType

export const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            debugger
            return {...state, ...action.payload.data}
        }
        case 'SET-LOGIN': {
            return {...state, isLoggedIn: action.payload.value}
        }
        case 'SET-LOGOUT':{
            return {...state,isLoggedIn:false}
        }
        default:
            return state

    }
}


type SetUserDataType = ReturnType<typeof setUserData>
export const setUserData = (data: UsersType) => {
    return {
        type: 'SET-USER-DATA',
        payload: {
            data
        }
    } as const
}

type SetLoginType = ReturnType<typeof setLogin>
export const setLogin = (value: boolean) => {
    return {
        type: 'SET-LOGIN',
        payload: {
            value
        }
    } as const
}

type SetLogoutType = ReturnType<typeof setLogout>
export const setLogout = () => {
    return {
        type: 'SET-LOGOUT',
    } as const
}


export const authTC = () => (dispatch: AppDispatch) => {
    authAPI.authMe()
        .then(data => {
            debugger
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data))
                dispatch(setLogin(true))
            }
        })
}


export const loginTC = (values: LoginValues) => (dispatch: AppDispatch) => {
    authAPI.login(values)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setLogin(true))
            }
            return data
        })
        .then(data=>{
            if(data.resultCode === 0){
                dispatch(authTC())
            }
        })
};

export const logoutTC = () =>(dispatch:AppDispatch)=>{
    authAPI.logout()
        .then(data=>{
            if(data.resultCode === 0) {
                dispatch(setLogout())
            }
        })
}


export type LoginValues = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: string
}