import React from 'react';
import {addMessageAC, DialogsPageType, updateMessageTextAC} from '../../bll/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../bll/redux-store';
import {Dispatch} from 'redux';


type MapStatePropsType = {
    dialogsPage: DialogsPageType
    isLoggedIn:boolean
}

type MapDispatchPropsType = {
    updateMessageText: (newText: string) => void
    sendMessage: () => void
}

export type DialogsContainerType = MapDispatchPropsType & MapStatePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isLoggedIn:state.auth.isLoggedIn
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

