import {ActionsTypes, DialogsPageType, MessageDataType} from './store';

const initialState = {
    dialogsData: [
        {id: 1, name: 'Maria', img: 'https://i.pinimg.com/236x/36/40/a5/3640a5fe598c887fcb2bf67b72dabe89.jpg'},
        {
            id: 2,
            name: 'Fedor',
            img: 'https://vjoy.cc/wp-content/uploads/2020/03/krutye-foto-i-kartinki-v-vk-18-1.jpg'
        },
        {
            id: 3,
            name: 'Petya',
            img: 'https://static4.tgstat.ru/channels/_0/c5/c512903414518ee9b3cf6c58d1882f10.jpg'
        },
        {
            id: 4,
            name: 'Ivana',
            img: 'http://android-obzor.com/wp-content/uploads/2022/03/be7c19a29e937067566fb2380baca39c.jpg'
        },
        {
            id: 5,
            name: 'Nikola',
            img: 'http://android-obzor.com/wp-content/uploads/2022/03/1b52d5299859613a5a1279f982471856.jpg'
        },
    ],
    messageData: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'yo'},
        {id: 3, message: 'how are you?'},
        {id: 4, message: 'fine'},
    ],
    textMessage: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.textMessage = action.newTextMessage;
            return state;
        case 'ADD-MESSAGE':
            const newMessage: MessageDataType = {id: 1, message: state.textMessage};
            state.messageData.push(newMessage);
            state.textMessage = '';
            return state;
        default:
            return state;
    }
}


export const addMessageAC = (textMessage: string) => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}

export const updateMessageTextAC = (newTextMessage: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newTextMessage
    } as const
}
