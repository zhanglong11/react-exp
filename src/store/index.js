import { combineReducers } from 'redux';
import {loginInfoReducer} from './loginInfo/reducers'

export const rootStore=combineReducers({
    loginInfo:loginInfoReducer
})
