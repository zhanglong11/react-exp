import React, {Component} from 'react';
import {Button, Input} from 'antd';
import './style.less';

const Login = props => {

    const login = () => {
        localStorage.setItem('isLogin', true);
        props.history.push({
            pathname: `/main`
        })
    }

    return (
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

        </div>
    )
}

export default Login
