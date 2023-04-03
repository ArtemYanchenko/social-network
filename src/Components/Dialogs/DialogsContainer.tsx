import React from 'react';
import {addMessageAC, DialogsPageType, updateMessageTextAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';


type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchPropsType = {
    updateMessageText: (newText: string) => void,
    sendMessage: () => void
}

export type DialogsContainerType = MapDispatchPropsType & MapStatePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateMessageText: (newText: string) => {
            dispatch(updateMessageTextAC(newText))
        },
        sendMessage: () => {
            dispatch(addMessageAC())

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)

