import {v1} from 'uuid';


export type UsersType = {
    users: UserType[]
}

export type UserType = {
    userId: string
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }
}

const initialState: UsersType = {
    users: [
        {
            userId: v1(),
            followed: true,
            fullName: 'Artem',
            status: 'hello,bro',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            userId: v1(),
            followed: true,
            fullName: 'Karina',
            status: 'hello, i am wife',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            userId: v1(),
            followed: false,
            fullName: 'Kirill',
            status: 'hello,i am brother',
            location: {city: 'Warsawa', country: 'Poland'}
        },
    ]
}
type ActionsTypes = FollowUserACType | SetUsersACType


export const userReducer = (state = initialState, action: ActionsTypes): UsersType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(user => user.userId === action.payload.userId ? {
                    ...user,
                    followed: action.payload.checked
                } : user)
            }
        }
        case 'SET-USERS': {
            return {...state,users:[...state.users,...action.payload.users]}
        }

        default:
            return state
    }
}

type FollowUserACType = ReturnType<typeof followUserAC>
export const followUserAC = (userId: string, checked: boolean) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId,
            checked
        }
    } as const
}

type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}