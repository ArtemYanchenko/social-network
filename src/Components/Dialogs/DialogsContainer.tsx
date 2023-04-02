import React, {ChangeEvent, useState} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {ActionsTypes, DialogsPageType} from '../../redux/store';
import {addMessageAC, updateMessageTextAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {StoreContext} from '../../StoreContext';

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                const state = store.getState().dialogsPage

                const sendMessage = () => {
                    if (state.textMessage) {
                        store.dispatch(addMessageAC(state.textMessage))
                    }
                }

                const updateMessageText = (newText: string) => {
                    store.dispatch(updateMessageTextAC(newText))
                }
                return (
                    <Dialogs sendMessage={sendMessage} updateMessageText={updateMessageText} dialogsPage={state}/>
                )
            }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;
