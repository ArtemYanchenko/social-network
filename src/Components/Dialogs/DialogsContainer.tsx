import React, {ChangeEvent, useState} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {ActionsTypes, DialogsPageType} from '../../redux/store';
import {addMessageAC, updateMessageTextAC} from '../../redux/dialogs-reducer';
import {StatePropsType} from '../../App';
import Dialogs from './Dialogs';

const DialogsContainer = (props: StatePropsType) => {

    const state = props.store.getState()

    const sendMessage = () => {
        if (state.dialogsPage.textMessage) {
            props.store.dispatch(addMessageAC(state.dialogsPage.textMessage))
        }
    }

    const updateMessageText = (newText:string) => {
        props.store.dispatch(updateMessageTextAC(newText))
    }
    // state.dialogsPage
    return (
            <Dialogs sendMessage={sendMessage} updateMessageText={updateMessageText} dialogsPage={state.dialogsPage}/>
    );
};

export default DialogsContainer;
