import styled from 'styled-components';

export const FeedbackBtn = styled.button`
 display: inline-flex;
 align-items: center;
  background-color: #fff;
  border: 2px solid #000;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  letter-spacing: 8px;
  line-height: 24px;
  min-width: 140px;
  outline: 0;
  padding: 0 17px;
  text-align: center;
  text-decoration: none;
  transition: all .3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover{
    border-color: #06f;
  color: #06f;
  fill: #06f;
  }

  &:focus{
    color: #171e29;
  }

  &:active{
    border-color: #06f;
  color: #06f;
  fill: #06f;
  }
  
  &:nth-of-type(even){
    margin: auto 5rem;
  }`;
   






