import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "./image/logo.png";
import {
  LogoutOutlined,
  BellOutlined,
  UserOutlined,
  CoffeeOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import { Menu, Badge } from "antd";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { getRequest } from "../hooks/api";
import { useStore } from "../hooks/useStore";
const NavBarStyle = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

const LogoutStyle = styled(LogoutOutlined)`
  font-size: 30px;
  margin-bottom: 20px;
  &:hover {
    color: #0d5cb6;
  }
`;

export default function NavBarAdmin() {
  const history = useHistory();
  const [current, setCurrent] = useState("user");
  const { count, setCount } = useStore((state) => ({
    count: state.count,
    setCount: state.setCount,
  }));
  const handleLogout = async () => {
    localStorage.clear();
    history.push("/login");
  };
  return (
    <NavBarStyle>
      <div>
        <img style={{ height: "50px" }} src={logo} alt="logo"></img>
      </div>
      <div style={{width: '80%', justifyContent: 'center'}}>
        <div>
          <Menu
            mode="horizontal"
            selectedKeys={[current]}
            onClick={(e) => setCurrent(e.key)}
            style={{width: '100%'}}
          >
            <Menu.Item key="user" icon={<UserOutlined />}>
              <Link to={"/admin/user"}>Quản lý tài khoản</Link>
            </Menu.Item>
            <Menu.Item key="foods" icon={<CoffeeOutlined />}>
              <Link to={"/admin/foods"}>Quản lý thuốc</Link>
            </Menu.Item>
            <Menu.Item key="statistical" icon={<RiseOutlined />}>
              <Link to={"/admin/statistical"}>Thống kê doanh thu</Link>
            </Menu.Item>
          </Menu>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <UserOutlined style={{ fontSize: "30px", marginBottom: "25px" }} />
        <p style={{ fontSize: "30px" }}>Admin</p>
        <LogoutStyle onClick={handleLogout} />
      </div>
    </NavBarStyle>
  ); // end return
}
