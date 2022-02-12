import styled, { css, keyframes } from 'styled-components';
import { Button } from '@mui/material';

const muradRotate = keyframes`
  from {
    transform: scale(.95);
  }

  to {
    transform: rotate(1.2);
  }
`;


export const Title = styled.h1`
  ${(a) => {
    console.log(a);

  }}

  ${(props) => css`
  font-size: 15px;
  font-weight: ${props.muradBold ? "bold" : "300"};
  color: ${(props) => {
      switch (props.muradColor) {
        case "green":
          return props.theme.colors.muradDarkGreen
        case "gray":
          return "#393b3c"
        default:
          return "red"
      }
    }};
  
  `}
/* 
  font-size: 15px;
  font-weight: ${(props) => props.muradBold ? "bold" : "300"};
  color: ${(props) => {
    switch (props.muradColor) {
      case "green":
        return "green"
      case "gray":
        return "#393b3c"
      default:
        return "red"
    }
  }}; */

`;


export const SubTitle = styled(Title)`
font-size:25px;
animation: ${muradRotate} 2s linear infinite;
`





export const CardButton = styled(Button).attrs((props) => ({
  variant: "contained"
  // variant:!props.muradColor ? "contained" :"outlined"

}))`
background: orange !important;

  &:hover{
    background: #d68f0c !important;
  }
`


export const TextPrice = styled.span.attrs()`
    font-size: 18px;
    color:red
`