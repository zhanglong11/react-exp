import React, {Component} from 'react';
import {Route, Switch,HashRouter as Router} from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/zh-cn';
import Login from '@Pages/Login';
import Main from '@Pages/Main';
import Home from '@Pages/Home';
import './style.less'

moment.locale('zh-cn');
export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/" render={(props) =>
                        <Main state={props}>
                            <Route exact path='/' component={Home}/>
                        </Main>
                    }/>
                </Switch>
            </Router>)
    }
}
