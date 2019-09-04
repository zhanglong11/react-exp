import React,{useEffect} from 'react';
import {Layout, Menu} from 'antd';
import {withRouter} from 'react-router-dom';
import NavLeft from '@Components/NavLeft'

const {Content, Sider} = Layout;

const Main=props=>{
    useEffect(()=>{
        isLogin();
    },[])
    const isLogin=()=>{
        let login=localStorage.getItem('isLogin');
        if(!login){
            props.history.push({
                pathname: `/login`
            })
        }
    }

    return (
        <Layout style={{height: '100%'}}>
            <Layout>
                <Sider width={200} style={{background: '#fff'}}>
                    <NavLeft history={props.history}/>
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
