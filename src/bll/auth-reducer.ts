export type UserInfoType = {
    userId:number | null
    email:string | null
    login:string | null
}
type InitialStateType = UserInfoType & {
    isLoggedIn:boolean
}


const initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isLoggedIn:false
}

type ActionsTypes = SetUserDataACType | SetLogedInACType

export const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {...state,...action.payload.data}
        }
        case 'SET-LOGEDIN':{
            return {...state,isLoggedIn:action.payload.value}
        }
        default:
            return state

    }
}


type SetUserDataACType = ReturnType<typeof setUserData>
export const setUserData = (data:UserInfoType) => {
    return {
        type: 'SET-USER-DATA',
        payload:{
            data
        }
    } as const
}

type SetLogedInACType = ReturnType<typeof setLogedIn>
export const setLogedIn = (value:boolean) => {
    return {
        type: 'SET-LOGEDIN',
        payload:{
            value
        }
    } as const
}