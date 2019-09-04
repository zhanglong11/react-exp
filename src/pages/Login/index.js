import React, {Component} from 'react';
import {Button, Input} from 'antd';
<<<<<<< HEAD
import './style.less';

const Login = props => {

    const login = () => {
        localStorage.setItem('isLogin', true);
=======
const Login=props=>{

    const login=()=>{
        localStorage.setItem('isLogin',true);
>>>>>>> 3e3413333b5689fb6f1aa8e59cfabf1b439f6f88
        props.history.push({
            pathname: `/main`
        })
    }

    return (
<<<<<<< HEAD
        <div className="login-wrapper">
            <div className="login-container">
                <h1 className="login-title">
                    <strong>
                        科科魔方有限责任公司
                    </strong>
                    <em>
                        企业管理系统
                    </em>
                </h1>
                <div className="login-form">
                    <Input className={'login-form-input'}/>
                    <Input className={'login-form-input'}/>
                    <Button className={'login-form-btn'} type='primary' onClick={login}>登录</Button>
                </div>
                <div className="login-desc">
                    <p>郑州星科电子技术有限公司</p>
                    <p>
                        <a href="###">你菜的像蔡旭坤</a>
                        <a href="###">你菜的像蔡旭坤</a>
                    </p>
                </div>
            </div>

=======
        <div>
            <Input/>
            <Input/>
            <Button type='primary' onClick={login}>登录</Button>
>>>>>>> 3e3413333b5689fb6f1aa8e59cfabf1b439f6f88
        </div>
    )
}

export default Login
