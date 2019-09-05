import React, {useEffect, useState} from 'react';
import {Layout, Dropdown, Avatar, Menu} from 'antd';
import {withRouter} from 'react-router-dom';
import NavLeft from '@Components/NavLeft';
import {freeLock} from "../../utils/md8";
import './style.less'

const {Content, Sider, Header} = Layout;

const Main = props => {
    const limit=localStorage.getItem('limit').split(',').map(l=>freeLock(l))
    useEffect(() => {
        isLogin();
    }, [])

    const isLogin = () => {
        let login = localStorage.getItem('isLogin');
        if (!login) {
            props.history.push({
                pathname: `/login`
            })
        }
    }

    const logout = () => {
        localStorage.removeItem('isLogin')
        props.history.push({
            pathname: `/login`,
        })
    }

    const loginInfo = (
        <Menu>
            <Menu.Item>
                <a onClick={logout}>退出登录</a>
            </Menu.Item>
        </Menu>
    )

    return (
        <Layout style={{height: '100%'}}>
            <Header className={'login-header'}>
                <Dropdown overlay={loginInfo}>
                    <Avatar
                        className="main-header-bell"
                        src="http://static.shenhaibulan.com/5d145766d770928319.png"
                        icon="user"
                    />
                </Dropdown>
            </Header>
            <Layout>
                <Sider width={200} style={{background: '#fff'}}>
                    <NavLeft history={props.history} limit={limit}/>
                </Sider>
                <Layout style={{padding: '0 24px 24px'}}>
                    <Content>
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default withRouter(Main)
