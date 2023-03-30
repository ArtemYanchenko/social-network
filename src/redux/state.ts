export type PostsDataType = {
    id: number,
    likesCount: number,
    message: string
}
export type DialogsDataType = {
    id: number,
    name: string,
    img: string
}
export type MessageDataType = {
    id: number,
    message: string
}
export type ProfilePageType = {
    messageForNewPost: string
    postsData: PostsDataType[]
}
export type DialogsPageType = {
    dialogsData: DialogsDataType[],
    messageData: MessageDataType[]
}
export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}




export type RootStateType = {
    _state:StateType
    getState:()=>StateType
    _callSubscriber:()=>void
    addPost:(postText:string)=>void
    changeTitleTextArea:(newTitle: string)=>void
    subscribe:(observer: () => void)=>void
}

export let store:RootStateType = {
    _state: {
        profilePage: {
            messageForNewPost: '',
            postsData: [
                {id: 1, likesCount: 5, message: 'hi, my first post'},
                {id: 2, likesCount: 10, message: 'i am fine'},
            ]
        },
        dialogsPage: {
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
            ]
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log('state was changed')
    },
    addPost(postText:string) {
        let newPost: PostsDataType = {id: 1, likesCount: 0, message: postText};
        this._state.profilePage.postsData.unshift(newPost);
        this._callSubscriber();
    },
    changeTitleTextArea(newTitle: string) {
        this._state.profilePage.messageForNewPost = newTitle;
        this._callSubscriber();
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },


}

