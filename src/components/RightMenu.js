import React, { useState } from "react";
import { UpgradeButton } from "../styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

const RightMenu = (props) => {
  const [minerUpgradesMade, setMinerUpgradesMade] = useState(1);
  const {
    count,
    setCount,
    // mineAmount,
    // setMineAmount,
    minerAddAmount,
    setMinerAddAmount,
    // minerUpgradesMade,
    // setMinerUpgradesMade,
    baseMinerUpgradeCost,
    setBaseMinerUpgradeCost,
  } = props;
  let minerUpgradeCost = baseMinerUpgradeCost * minerUpgradesMade;
  let handleMinerUpgrade = () => {
    if (count > minerUpgradeCost) {
      setCount(count - minerUpgradeCost);
      setMinerAddAmount(minerAddAmount * minerUpgradesMade);
      setMinerUpgradesMade(minerUpgradesMade + 1);
    }
    if (minerUpgradesMade > 5) {
      setBaseMinerUpgradeCost(500);
    }
  };
  return (
    <Card className="text-center" bg="dark" text="light">
      <Card.Header>Miner Upgrade</Card.Header>
      <Card.Title> MINE'S {minerAddAmount} /sec</Card.Title>
      <Card.Text>price: {minerUpgradeCost}</Card.Text>
      <Button variant="danger" onClick={handleMinerUpgrade}>
        Upgrade Miner
      </Button>
    </Card>
  );
};

export default RightMenu;
// myVar = setInterval(function, milliseconds);
