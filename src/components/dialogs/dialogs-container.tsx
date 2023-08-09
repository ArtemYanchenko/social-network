import React from 'react';
import {addMessage, DialogsPageType, updateMessageText} from '../../bll/dialogs-reducer';
import {Dialogs} from './dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../bll/redux-store';

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default connect(mapStateToProps, {updateMessageText,addMessage})(Dialogs)

//types
type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchPropsType = {
    updateMessageText: (newText: string) => void
    addMessage: () => void
}

export type DialogsContainerType = MapDispatchPropsType & MapStatePropsType
