import {AppDispatch} from './redux-store';
import {authTC} from './auth-reducer';

type initialStateType = {
    initialized:boolean
    nightMode:boolean
}

const initialState = {
    initialized:false,
    nightMode:false
}


export const appReducer = (state:initialStateType=initialState,action:ActionType) => {
    switch (action.type) {
        case 'SUCCESS_INITIALIZED':{
            return {...state,initialized: true}
        }
        case 'SET-NIGHT-MODE':{
            return {...state,nightMode: action.mode}
        }
        default: return state
    }
}

//actions
const setInitialized = () =>({type:'SUCCESS_INITIALIZED'}as const)
export const setNightMode = (mode:boolean) =>({type:'SET-NIGHT-MODE',mode}as const)

//tunks
export const initializeApp = () => async (dispatch:AppDispatch) => {
    await dispatch(authTC())
    dispatch(setInitialized())
}

//types
export type SetInitializedType = ReturnType<typeof setInitialized>
export type SetNightModeType = ReturnType<typeof setNightMode>
type ActionType = SetInitializedType | SetNightModeType