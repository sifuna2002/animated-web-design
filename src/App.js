import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Content from './components/Content'
import img from './img/back.png'
function App() {
  return (
      <Container>
        <Header />
        <Content />
      </Container>
  );
}

export default App;

const Container=styled.div`
  margin:0;
  padding:0;
  box-sizing:border-box;
  margin:0;
  padding:0;
  width:100%;
  min-height:100vh;
  background-image: linear-gradient(rgba(5, 0, 136, 0.5), rgba(5, 0, 136, 0.5)), url(${img});
    background-position: center;
    background-size: cover;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    overflow: hidden;
    background-repeat: no-repeat;
`
