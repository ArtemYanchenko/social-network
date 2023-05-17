export type UsersType = {
    followed: boolean
    id: number
    name: string
    photos: { small: string | null, large: string | null }
    status: string | null
    uniqueUrlName: string | null
}

type ActionsTypes = FollowUserACType | SetUsersACType | toggleUsersPageAC | SetTotalCountACType | ToggleFetchingACType

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
    isFetching: boolean
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
        case 'SET-TOTAL-COUNT': {
            return {...state, totalUsersCount: action.payload.totalCount}
        }
        case 'TOGGLE-FETCHING': {
            return {...state, isFetching: action.payload.checked}
        }
        default:
            return state

    }
}

type FollowUserACType = ReturnType<typeof followUser>
export const followUser = (id: number, checked: boolean) => {
    return {
        type: 'FOLLOW',
        payload: {
            id,
            checked
        }
    } as const
}

type SetUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: UsersType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}

type toggleUsersPageAC = ReturnType<typeof toggleUsersPage>
export const toggleUsersPage = (currentPage: number) => {
    return {
        type: 'TOGGLE-USERS-PAGE',
        payload: {
            currentPage
        }
    } as const
}

type SetTotalCountACType = ReturnType<typeof setTotalCount>
export const setTotalCount = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        payload: {
            totalCount
        }
    } as const
}


type ToggleFetchingACType = ReturnType<typeof toggleFetching>
export const toggleFetching = (checked:boolean) => {
    return {
        type: 'TOGGLE-FETCHING',
        payload:{
            checked
        }
    } as const
}