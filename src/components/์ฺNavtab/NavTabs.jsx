import * as React from "react";
import styled from "styled-components";
import { instance } from '../../api'


export default function NavTabs() {
  const [value, setValue] = React.useState(0);


  const logOut = async (data) => {
    await instance.post("/logout", data);
  }

  const NavTab = styled.div`
  font-size: 24px;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0px;
  border-radius: 10px;
    box-shadow: 1px 1px 10px 1px #3f52a045;
    background-color: #ffff;
    height: 60px;
    width: 100%;
  `

  return (
    <div>
    <NavTab>
        <a href="/">🥇 overview</a>
        <a href="/activities">🏃🏼‍♀️ activity</a>
        <a onClick={logOut}>🚪 logout</a> 
        </NavTab>
             
        </div>   
  );
}
