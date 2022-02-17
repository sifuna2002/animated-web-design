import React from 'react'
import styled from 'styled-components'
function Header() {
  return (
    <Container>
        <Logo>
            <img src="logo192.png"/>
            <span>wearme</span>
        </Logo>
        <ul>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">Features</a>
          </li>
          <li>
            <a href="/#">Fitness</a>
          </li>
          <li>
            <a href="/#">Connectivity</a>
          </li>
          <li>
            <a href="/#">Support</a>
          </li>
        </ul>
    </Container>
  )
}

export default Header
const Container=styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  ul,li{
    display:inline-block;
    list-style:none;
    margin:10px 20px;
  }
  a{
    text-decoration: none;
    color:#fff;
    font-weight: 500;
  }
  a:hover{
    color:#333;
  }
  
`
const Logo=styled.div`
  display: flex;
  align-items:center;
  padding-left: 18px;
  font-size: 26px;
  font-weight: 600;
  color:#fff;
  img{
    width: 60px;
    margin-right: 10px;
  }
  
`