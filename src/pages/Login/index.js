import React, { useState} from 'react';
import {Button, Input} from 'antd';
import ReactCanvasNest from './CanvasBack';
import {addLock} from "../../utils/md8";
import './style.less';


const limit=['server','chart'];

const Login=props=>{
    // const [limit,setLimit]=useState([]);
    // const limitLock=()=>{
    //     limit.map(l=>addLock(l));
    //     setLimit([...limit]);
    // }

    const login=()=>{
        localStorage.setItem('isLogin',true);
        localStorage.setItem('limit',limit.map(l=>addLock(l)));
        props.history.push({
            pathname: `/main`
        })
    }

    return (
        <div className="login-wrapper">
            <ReactCanvasNest />
            <div className="login-container">
                <h1 className="login-title">
                    华夏天信有限公司
                </h1>
                <h2>
                    企业管理系统
                </h2>
                <div className="login-form">
                    <Input className={'login-form-input'}/>
                    <Input className={'login-form-input'}/>
                    <Button className={'login-form-btn'} type='primary' onClick={login}>登录</Button>
                </div>
                <div className="login-desc">
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
