export type UsersType = {
    followed: boolean
    id: number
    name: string
    photos: { small: string | null, large: string | null }
    status: string | null
    uniqueUrlName: string | null
}

type ActionsTypes = FollowUserACType | SetUsersACType

const initialState:UsersType[] = []

export const userReducer = (state = initialState, action: ActionsTypes): UsersType[] => {
    switch (action.type) {
        case 'FOLLOW': {
            return state.map(el=>el.id === action.payload.id ? {...el,followed:action.payload.checked} : el)
        }

        case 'SET-USERS': {
            return [...state,...action.payload.users]
        }

        default:
            return state
    }
}
type FollowUserACType = ReturnType<typeof followUserAC>
export const followUserAC = (id: number, checked: boolean) => {
    return {
        type: 'FOLLOW',
        payload: {
            id,
            checked
        }
    } as const
}

type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UsersType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}