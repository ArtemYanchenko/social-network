import {v1} from 'uuid';


export type UsersType = {
    users: UserType[]
}

type UserType = {
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
type ActionsTypes = FollowUserACType


export const userReducer = (state = initialState, action: ActionsTypes): UsersType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {...state, users:state.users.map(user=>user.userId === action.payload.userId ? {...user,followed:action.payload.checked} :user)}
        }
        default:
            return state
    }
}

type FollowUserACType = ReturnType<typeof followUserAC>
export const followUserAC = (userId: string,checked:boolean) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId,
            checked
        }
    } as const
}