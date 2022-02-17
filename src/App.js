import React from 'react'
import styled from 'styled-components'
import img from './img/back.png'
import Header from './components/Header'
import Content from './components/Content'
function App() {
  return (
      <Container>
        <Wrapper>
        <Header />
        <Content />
        </Wrapper>
      </Container>
  );
}

export default App;

const Container=styled.div`
  margin:0;
  padding:0;
  box-sizing:border-box;
`
const Wrapper=styled.div`
  margin:0;
  padding:0;
  width:100%;
  height:100vh;
  background-image:linear-gradient(rgba(5,0,136,0.5),rgba(5,0,136,0.5)),url(${img});
  background-position:center;
  background-size: cover;
  transition: all .5s;;
`