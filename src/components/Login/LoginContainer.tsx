import {connect} from 'react-redux';
import Login from './Login';
import {AppDispatch, AppStateType} from '../../bll/redux-store';
import {loginTC, LoginValues} from '../../bll/auth-reducer';

const mapStateToProps = (state: AppStateType) => {
 return {}
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        login: (values: LoginValues) => {
            dispatch(loginTC(values))
        }
    }
}

export type LoginPropsType = {} & { login: (values: LoginValues) => void }


export default connect(mapStateToProps, mapDispatchToProps)(Login)