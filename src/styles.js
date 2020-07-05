import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: white;
    background-color: black;
    
  }
`;

const Middler = styled.div`
  text-align: center;
  align-items: center;
`;

const Clicker = styled.button`
  align: center;
  vertical-align: center;
  margin-top: 5%;
  order: 5;
`;

const LeftMenuWrapper = styled.div`
  margin-left: 25%;
  vertical-align: left;
  border: 1px solid;
  border-radius: 5px;
  border-color: red;
  width: 300px;
  min-hieght: 500px;
  justify-items: center;
  align-items: center;
  flex-direction: column;
`;

const UpgradeButton = styled.button`
  color: blue;
  background-color: white;
  border-color: blue;
`;

export { Clicker, Middler, LeftMenuWrapper, UpgradeButton, GlobalStyle };
