import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./Components/Login";
export default function App(props) {
  return (
    <div className="App">
      <Container>
        <Navbar>
          <a href="/">
            <img src="/images/login-logo.svg"></img>
          </a>
        </Navbar>
      </Container>
    </div>
  );
}

const Container = styled.div`
padding:0px`; 
const Navbar = styled.nav`
max-width:100%;
margin:auto;
padding:15px 5px  15px;
display:flex;
align-items:center;
justify-content:space-between;
flex-wrap:nowrap;

&>a{
    width:135px;
}
@media(max-width : 760px)
{
    padding-left:10px;
}
`;
