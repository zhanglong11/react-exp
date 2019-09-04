import React, {Component} from 'react';
import {LocaleProvider} from 'antd';
import {Route, Switch,HashRouter as Router} from 'react-router-dom';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import Login from '@Pages/Login';
import Main from '@Pages/Main';
import Home from '@Pages/Home';
import './style.less'

moment.locale('zh-cn');
export default class App extends Component {

<<<<<<< HEAD
=======

>>>>>>> 3e3413333b5689fb6f1aa8e59cfabf1b439f6f88
    render() {
        return (<LocaleProvider locale={zh_CN}>
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/" render={(props) =>
                        <Main state={props}>
                            <Route exact path='/' component={Home}/>
                        </Main>
                    }/>
                </Switch>
            </Router>
        </LocaleProvider>)
    }
}
