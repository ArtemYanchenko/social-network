import {AppDispatch} from './redux-store';
import {UsersType} from './user-reducer';
import {authAPI} from '../dal/auth-api';
import {profileAPI} from '../dal/profile-api';

const initialState: InitialStateType = {
    id: 0,
    email: '',
    login: '',
    photo: '',
    isLoggedIn: false
}

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

//actions
export const setUserPhoto = (photo: string) => ({type: 'SET-USER-PHOTO', photo} as const)

export const setUserData = (data: UsersType) => ({
    type: 'SET-USER-DATA',
    payload: {
        data
    }
} as const)

export const setLogin = (value: boolean) => ({
    type: 'SET-LOGIN',
    payload: {value}
} as const)

export const setLogout = () => ({type: 'SET-LOGOUT'} as const)


export const authTC = () => async (dispatch: AppDispatch) => {
    const data = await authAPI.authMe()
    if (data.resultCode === 0) {
        await dispatch(setUserData(data.data))
        dispatch(setLogin(true))
        dispatch(getPhotoTC(data.data.id))
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

const getPhotoTC = (id: string) => (dispatch: AppDispatch) => {
    profileAPI.getProfilePage(id).then(data => {
            dispatch(setUserPhoto(data.photos.large))
        }
    )
}

//types
type ActionsTypes =
    | ReturnType<typeof setUserData>
    | ReturnType<typeof setLogin>
    | ReturnType<typeof setLogout>
    | ReturnType<typeof setUserPhoto>

export type UserInfoType = {
    id: number
    email: string
    login: string
    photo: string
}

type InitialStateType = UserInfoType & {
    isLoggedIn: boolean
}

export type LoginValues = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: string
}