import {authAPI, profileAPI} from '../dal/api';
import {AppDispatch} from './redux-store';
import {UsersType} from './user-reducer';

export type UserInfoType = {
    id: number
    email: string
    login: string
    photo: string
}
type InitialStateType = UserInfoType & {
    isLoggedIn: boolean
}


const initialState: InitialStateType = {
    id: 0,
    email: '',
    login: '',
    photo: '',
    isLoggedIn: false
}

type ActionsTypes =
    | SetUserDataType
    | SetLoginType
    | SetLogoutType
    | SetUserPhotoType

export const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {...state, ...action.payload.data}
        }
        case 'SET-LOGIN': {
            return {...state, isLoggedIn: action.payload.value}
        }
        case 'SET-LOGOUT': {
            return {...state, isLoggedIn: false}
        }
        case 'SET-USER-PHOTO': {
            return {...state, photo: action.photo}
        }
        default:
            return state

    }
}

type SetUserPhotoType = ReturnType<typeof setUserPhoto>
export const setUserPhoto = (photo: string) => ({type: 'SET-USER-PHOTO', photo} as const)

type SetUserDataType = ReturnType<typeof setUserData>
export const setUserData = (data: UsersType) => ({
    type: 'SET-USER-DATA',
    payload: {
        data
    }
} as const)

type SetLoginType = ReturnType<typeof setLogin>
export const setLogin = (value: boolean) => ({
    type: 'SET-LOGIN',
    payload: {
        value
    }
} as const)

type SetLogoutType = ReturnType<typeof setLogout>
export const setLogout = () => ({
    type: 'SET-LOGOUT',
} as const)


export const authTC = () => async (dispatch: AppDispatch) => {
    const data = await authAPI.authMe()
    if (data.resultCode === 0) {
        await dispatch(setUserData(data.data))
        debugger
        dispatch(setLogin(true))
        dispatch(getPhoto(data.data.id))
    }
}


export const loginTC = (values: LoginValues) => (dispatch: AppDispatch) => {
    authAPI.login(values)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setLogin(true))
            }
            return data
        })
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(authTC())
            }
        })
};

export const logoutTC = () => (dispatch: AppDispatch) => {
    authAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setLogout())
            }
        })
}


const getPhoto = (id: string) => (dispatch: AppDispatch) => {
    profileAPI.getProfilePage(id).then(data => {
            debugger;
            dispatch(setUserPhoto(data.photos.large))
        }
    )
}

export type LoginValues = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: string
}