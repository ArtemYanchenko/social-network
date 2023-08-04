import {Dispatch} from 'redux';
import {usersAPI} from '../dal/api';

export type UsersType = {
    followed: boolean
    id: number
    name: string
    photos: { small: string | null, large: string | null }
    status: string | null
    uniqueUrlName: string | null
}

type ActionsTypes =
    | FollowUserACType
    | SetUsersACType
    | toggleUsersPageAC
    | SetTotalCountACType
    | ToggleFetchingACType
    | ToggleFollowingACType


type InitialStateType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 30,
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
export const toggleFetching = (checked: boolean) => {
    return {
        type: 'TOGGLE-FETCHING',
        payload: {
            checked
        }
    } as const
}

type ToggleFollowingACType = ReturnType<typeof toggleFollowing>
export const toggleFollowing = (id: number, isFetching: boolean) => {
    return {
        type: 'TOGGLE-FOLLOWING',
        payload: {
            id,
            isFetching
        }
    } as const
}

export const getUsersTC = (pageSize: number, currentPage: number) => (dispatch: Dispatch) => {
    dispatch(toggleFetching(true));
    usersAPI.getUsers(pageSize, currentPage)
        .then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalCount((data.totalCount / 50)));
            dispatch(toggleFetching(false));
        })
}

export const followUserTC = (id:number) => (dispatch:Dispatch) => {
    dispatch(toggleFollowing(id, true));
    usersAPI.followUser(id)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followUser(id, true));
            }
            dispatch(toggleFollowing(id, false))
        })
}

export const unfollowUserTC = (id:number) => (dispatch:Dispatch) => {
    dispatch(toggleFollowing(id, true));
    usersAPI.unfollowUser(id)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followUser(id, true));
            }
            dispatch(toggleFollowing(id, false))
        })
}