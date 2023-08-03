import {AppDispatch} from './redux-store';
import {authTC} from './auth-reducer';

type initialStateType = {
    initialized:boolean
}

const initialState = {
    initialized:false
}


export const appReducer = (state:initialStateType=initialState,action:SetInitializedType) => {
    switch (action.type) {
        case 'SUCCESS_INITIALIZED':{
            return {...state,initialized: true}
        }
        default: return state
    }
}


const setInitialized = () =>({type:'SUCCESS_INITIALIZED'}as const)
export type SetInitializedType = ReturnType<typeof setInitialized>

export const initializeApp = () => async (dispatch:AppDispatch) => {
    await dispatch(authTC())
    dispatch(setInitialized())
}