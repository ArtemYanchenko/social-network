import {Dispatch} from 'redux';
import {usersAPI} from '../dal/user-api';

const initialState: InitialStateType = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
        case 'TOGGLE-FOLLOWING': {
            return {
                ...state,
                followingInProgress: action.payload.isFetching ? [...state.followingInProgress, action.payload.id] : state.followingInProgress.filter(el => action.payload.id !== el)
            }
        }
        default:
            return state

    }
}


//actions
export const followUser = (id: number, checked: boolean) => ({
    type: 'FOLLOW',
    payload: {
        id,
        checked
    }
} as const)

export const setUsers = (users: UsersType[]) => ({
    type: 'SET-USERS',
    payload: {users}
} as const)

export const toggleUsersPage = (currentPage: number) => ({
    type: 'TOGGLE-USERS-PAGE',
    payload: {currentPage}
} as const)

export const setTotalCount = (totalCount: number) => ({
    type: 'SET-TOTAL-COUNT',
    payload: {totalCount}
} as const)


export const toggleFetching = (checked: boolean) => ({
    type: 'TOGGLE-FETCHING',
    payload: {checked}
} as const)


export const toggleFollowing = (id: number, isFetching: boolean) => ({
    type: 'TOGGLE-FOLLOWING',
    payload: {
        id,
        isFetching
    }
} as const)

//thunks
export const getUsersTC = (pageSize: number, currentPage: number) => (dispatch: Dispatch) => {
    dispatch(toggleFetching(true));
    usersAPI.getUsers(pageSize, currentPage)
        .then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalCount((data.totalCount)));
            dispatch(toggleFetching(false));
        })
}

export const followUserTC = (id: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowing(id, true));
    usersAPI.followUser(id)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followUser(id, true));
            }
            dispatch(toggleFollowing(id, false))
        })
}

export const unfollowUserTC = (id: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowing(id, true));
    usersAPI.unfollowUser(id)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followUser(id, true));
            }
            dispatch(toggleFollowing(id, false))
        })
}

//types
export type UsersType = {
    followed: boolean
    id: number
    name: string
    photos: { small: string | null, large: string | null }
    status: string | null
    uniqueUrlName: string | null
}
type ActionsTypes =
    | ReturnType<typeof followUser>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof toggleUsersPage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof toggleFetching>
    | ReturnType<typeof toggleFollowing>


type InitialStateType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
