import React from "react";
import {Menu} from "antd";
import MenuConfig from "../../config/menuList";

const SubMenu = Menu.SubMenu;

const NavLeft=props=>{
    const changeRoute=(key)=>{
        props.history.push({
            pathname: `${key}`
        })
    }

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
