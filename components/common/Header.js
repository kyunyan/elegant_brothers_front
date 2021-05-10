import React from 'react';
import {Menu} from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import MenuOutlined from "@ant-design/icons/lib/icons/MenuOutlined";
import styled from 'styled-components';
import logo from '../../resources/image/common/logo.png';
import MenuItem from "antd/lib/menu/MenuItem";

const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1050px;
  margin: 0 auto;
`

const UserMenuContainer = styled.div`
  width: 100%;
  & ul {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    
    & li {
      position: relative;
      display: flex;
      align-items: center;
      height: 37px;
      padding: 0 10px;
      font-size: 12px;
      font-weight: 400;
      letter-spacing: -.3px;
    }
    
    & li:not(:last-child):after {
      content: '';
      position: absolute;
      right: 0px;
      width: 1px;
      height: 13px;
      background-color: #d8d8d8;
    }
    
    & li>a {
      color: #4C4C4E;
    }
`

//TODO: LOGO 및 사이즈 변경필요
const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    & img {
      height: 79px;
    }
`

const Header = () => {
  return (
    <HeaderContainer>
      <UserMenuContainer>
        <ul>
          <li>
            <a href="#">회원가입</a>
          </li>
          <li>
            <a href="#">로그인</a>
          </li>
          <li>
            <a href="#">고객센터</a>
          </li>
        </ul>
      </UserMenuContainer>
      <LogoContainer>
        <img src={logo}/>
      </LogoContainer>
      <Menu mode="horizontal">
        <SubMenu key="SubMenu" icon={<MenuOutlined />} title="전체 카테고리">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item>Option 1</Menu.Item>
            <Menu.Item>Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item>Option 3</Menu.Item>
            <Menu.Item>Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        <MenuItem>
          <a href="/myPage">myPage</a>
        </MenuItem>
        <MenuItem>
          <a href="/listPage/list">list</a>
        </MenuItem>
        <MenuItem>
          <a href="/detailPage/detailPage">detail</a>
        </MenuItem>
        <MenuItem>
          <a href="/cartPage/cartPage">cart</a>
        </MenuItem>
      </Menu>
    </HeaderContainer>
  )
}

export default Header;
