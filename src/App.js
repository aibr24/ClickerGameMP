import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, ThemeProvider } from "react-bootstrap";
import { Clicker, Middler, GlobalStyle } from "./styles";
import LeftMenu from "./components/LeftMenu";
import "./App.css";
import RightMenu from "./components/RightMenu";
let intervalId;
function App() {
  const [count, setCount] = useState(0);
  const [mineAmount, setMineAmount] = useState(1);
  const [minerAddAmount, setMinerAddAmount] = useState(1);
  const [baseMinerUpgradeCost, setBaseMinerUpgradeCost] = useState(10);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCount(count + minerAddAmount);
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, [count]);

  const countNumber = () => setCount(count + mineAmount);

  return (
    <Container bg="dark">
      <GlobalStyle />
      <Row>
        <Col>
          <LeftMenu
            count={count}
            setCount={setCount}
            mineAmount={mineAmount}
            setMineAmount={setMineAmount}
          />
        </Col>
        <Col xs={6}>
          <Middler>
            <Clicker onClick={countNumber}>Mine {mineAmount} gold</Clicker>
            <h3>{count} gold</h3>
            <h3>{minerAddAmount} Per Second</h3>
          </Middler>
        </Col>
        <Col>
          <RightMenu
            count={count}
            setCount={setCount}
            // mineAmount={mineAmount}
            // setMineAmount={setMineAmount}
            minerAddAmount={minerAddAmount}
            setMinerAddAmount={setMinerAddAmount}
            // minerUpgradesMade={minerUpgradesMade}
            // setMinerUpgradesMade={setMinerUpgradesMade}
            baseMinerUpgradeCost={baseMinerUpgradeCost}
            setBaseMinerUpgradeCost={setBaseMinerUpgradeCost}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
