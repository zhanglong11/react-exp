import React,{useState,useEffect}from "react";
import {Menu} from "antd";
import MenuConfig from "../../config/menuList";

const SubMenu = Menu.SubMenu;

const NavLeft=props=>{
    const limit=props.limit;
    console.log(limit)
    const changeRoute=(key)=>{
        props.history.push({
            pathname: `${key}`
        })
    }

    useEffect(()=>{
        // initNav(MenuConfig);
    },[]);

    // const initNav=(menuList)=>{
    //     menuList.map(m=>{
    //         if(m.children&&m.children.length){
    //             return initNav(m.children);
    //         }
    //         debugger;
    //         if(limit.includes(m.limit)){
    //            return m
    //         }
    //     });
    //    return MenuConfig
    // }

    const renderMenu = (MenuConfig) => {
        return MenuConfig.map(item => {
            if (item.children) {
                return (
                    <SubMenu title={item.title}  key={item.key}>
                        {renderMenu(item.children)}
                    </SubMenu>
                );
            }
            return (
                <Menu.Item title={item.title} key={item.key} onClick={()=>{changeRoute(item.key)}}>
                    {item.title}
                </Menu.Item>
            );
        });
    };

    return (
        <Menu mode="inline">
            {renderMenu(MenuConfig)}
        </Menu>
    );
}

export default NavLeft
