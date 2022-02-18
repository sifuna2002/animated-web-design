import React from 'react'
import styled from 'styled-components'
function Content() {
  return (
    <Container>
        <h1>The<br/>Future</h1>
        <p>This is the first smartwatch from our company. We are making a huge collection of watches in all categories.</p>
        <div>
            <button>Learn More</button>
            <a href="/#">or Contact</a>
        </div>
    </Container>
  )
}

export default Content
const Container=styled.div`
    width: 100%;
    margin-top: 9%;
    margin-left: 9%;
    color: #fff;
    h1{
        font-size:120px;
        line-height: 100px;
        font-weight: 600;
    }
    p{
        max-width: 500px;
        line-height: 28px;
    }
    div {
        a{
        color: #fff;
        text-decoration: none;
        display: inline-block;
        }
        button{
            border:2px solid #fff;
            padding:10px 35px;
            border-radius: 30px;
            margin-right: 15px;
            cursor:pointer;
        }

    }
    p,h1,div{
        animation:slideleft 1s linear forwards;
    }
    @keyframes slideleft {
        0%{
            transform:translate(100px);
            opacity:0;
        }
        100%{
            transform:translate(0px);
            opacity:1;
        }
    }
    p{
        animation-delay: 2s;
    }
    h1{
        animation-delay: 1s;
    }
    div{
        animation-delay: 3s;
    }
    @media screen and (max-width: 960px) {
        
        h1{
        font-size:100px;
        line-height: 90px;
        font-weight: 600;
    }
    p{
        max-width: 300px;
        line-height: 28px;
    }
    }
`