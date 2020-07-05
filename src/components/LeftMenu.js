import React, { useState } from "react";
import { LeftMenuWrapper, UpgradeButton } from "../styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

const LeftMenu = (props) => {
  const { count, setCount, mineAmount, setMineAmount } = props;
  const [mineUpgradesMade, setMineUpgradesMade] = useState(1);
  const [mineBaseUpgradeCost, setBaseMineUpgradeCost] = useState(20);
  let mineUpgradeCost = mineBaseUpgradeCost * mineUpgradesMade * 2;
  let handleUpgrade = () => {
    if (count > mineUpgradeCost) {
      setCount(count - mineUpgradeCost);
      setMineAmount(mineAmount + mineUpgradesMade * 0.5);
      setMineUpgradesMade(mineUpgradesMade + 1);
    }
    // for "mine upgrade cost" balancing
    if (mineUpgradesMade > 19) {
      setBaseMineUpgradeCost(500);
    }
  };

  return (
    <LeftMenuWrapper>
      <Card className="text-center" bg="dark" text="light">
        <Card.Header>Clicker upgrade</Card.Header>
        <Card.Title>MINE * 1.25</Card.Title>
        <Card.Text>Price: {mineUpgradeCost} gold</Card.Text>
        <Button variant="danger" onClick={handleUpgrade}>
          Upgrade
        </Button>
      </Card>
    </LeftMenuWrapper>
  );
};

export default LeftMenu;
