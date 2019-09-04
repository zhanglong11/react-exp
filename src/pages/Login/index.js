import React, {Component} from 'react';
import {Button, Input} from 'antd';
const Login=props=>{

    const login=()=>{
        localStorage.setItem('isLogin',true);
        props.history.push({
            pathname: `/main`
        })
    }

    return (
        <div>
            <Input/>
            <Input/>
            <Button type='primary' onClick={login}>登录</Button>
        </div>
    )
}

export default Login
