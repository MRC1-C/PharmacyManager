import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "./image/logo.png";
import {
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { getRequest } from "../hooks/api";
import { useHistory } from "react-router";
import { useStore } from "../hooks/useStore";
// import { render } from "@testing-library/react";
const NavBarStyle = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

const LogoutStyle = styled(LogoutOutlined)`
  font-size: 30px;
  margin-bottom: 20px;
  &:hover {
    color: #0d5cb6; // <Thing> when hovered
  }
`;

export default function NavBar() {
  const history = useHistory();
  // const [data, setData] = useState();
  const { username, setUsername } = useStore((state) => ({
    username: state.userName,
    setUsername: state.setUserName,
  }));
  useEffect(() => {
    const getUserName = async () => {
      try {
        let name = await getRequest("/getuser");
        setUsername(name.username);
      } catch (error) {
        console.log(error);
        // history.push("/login");
      }
    };
    getUserName();
  }, [history, setUsername]);

  const handleLogout = async () => {
    // await postRequest("/moremonney", {
    //   moremonney: monneynow,
    // });
    localStorage.clear();
    history.push("/login");
  };
  return (
    <NavBarStyle>
      <div>
        <img style={{ height: "50px" }} src={logo} alt="logo"></img>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <UserOutlined style={{ fontSize: "30px", marginBottom: "25px" }} />
        <p style={{ fontSize: "30px" }}>{username}</p>
        <LogoutStyle onClick={handleLogout} />
      </div>
    </NavBarStyle>
  );
}
