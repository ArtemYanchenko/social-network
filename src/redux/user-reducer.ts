export type UsersType = {
    followed: boolean
    id: number
    name: string
    photos: { small: string | null, large: string | null }
    status: string | null
    uniqueUrlName: string | null
}

type ActionsTypes = FollowUserACType | SetUsersACType | toggleUsersPageAC | SetTotalCountACType

// const initialState: UsersType[] = [{
//     followed: false,
//     id: 29075,
//     name: 'cutiePie',
//     photos: {small: null, large: null},
//     status: null,
//     uniqueUrlName: null
// }]

type InitialStateType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
}

export const userReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.id ? {
                    ...el,
                    followed: action.payload.checked
                } : el)
            }
        }
        case 'SET-USERS': {
            return {...state, users: [...action.payload.users]}
        }
        case 'TOGGLE-USERS-PAGE': {
            return {...state, currentPage: action.payload.currentPage}
        }
        case 'SET-TOTAL-COUNT':{
            return {...state,totalUsersCount:action.payload.totalCount}
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

type toggleUsersPageAC = ReturnType<typeof toggleUsersPageAC>
export const toggleUsersPageAC = (currentPage: number) => {
    return {
        type: 'TOGGLE-USERS-PAGE',
        payload: {
            currentPage
        }
    } as const
}

type SetTotalCountACType = ReturnType<typeof setTotalCountAC>
export const setTotalCountAC = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        payload: {
            totalCount
        }
    } as const
}