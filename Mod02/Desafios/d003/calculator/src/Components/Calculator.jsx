import { useState } from "react";
import {
  Button,
  Container,
  Title,
  CustomButton,
  CustomButton2,
  Row,
  View,
} from "./styled";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();
  const [equals, setEquals] = useState(false);

  function inputNum(e) {
    let input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
  }

  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function porcentage() {
    setNum(num / 100);
    setEquals(false);
  }

  function operatorHandler(e) {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
    setEquals(false);
  }

  function calculate() {
    if (operator === "/") {
      setNum(parseFloat(oldNum) / parseFloat(num));
      setEquals(true);
    } else if (operator === "X") {
      setNum(parseFloat(oldNum) * parseFloat(num));
      setEquals(true);
    } else if (operator === "-") {
      setNum(parseFloat(oldNum) - parseFloat(num));
      setEquals(true);
    } else if (operator === "+") {
      setNum(parseFloat(oldNum) + parseFloat(num));
      setEquals(true);
    }
  }

  return (
    <Container>
      <Title>CALCULADORA</Title>
      <View>
        <h1>
          {!equals && oldNum !== 0 && <div>{oldNum}</div>}
          {!equals && (
            <div>
              {operator} {num}
            </div>
          )}
        </h1>
        {equals && <h1>{num}</h1>}

      </View>
      <Row>
        <CustomButton onClick={clear}>AC</CustomButton>
        <CustomButton onClick={changeSign}>+/-</CustomButton>
        <CustomButton onClick={porcentage}>%</CustomButton>
        <CustomButton2 onClick={operatorHandler} value="/">
          /
        </CustomButton2>
      </Row>
      <Row>
        <Button onClick={inputNum} value={7}>
          7
        </Button>
        <Button onClick={inputNum} value={8}>
          8
        </Button>
        <Button onClick={inputNum} value={9}>
          9
        </Button>
        <CustomButton2 onClick={operatorHandler} value="X">
          X
        </CustomButton2>
      </Row>
      <Row>
        <Button onClick={inputNum} value={4}>
          4
        </Button>
        <Button onClick={inputNum} value={5}>
          5
        </Button>
        <Button onClick={inputNum} value={6}>
          6
        </Button>
        <CustomButton2 onClick={operatorHandler} value="-">
          -
        </CustomButton2>
      </Row>
      <Row>
        <Button onClick={inputNum} value={1}>
          1
        </Button>
        <Button onClick={inputNum} value={2}>
          2
        </Button>
        <Button onClick={inputNum} value={3}>
          3
        </Button>
        <CustomButton2 onClick={operatorHandler} value="+">
          +
        </CustomButton2>
      </Row>
      <Row>
        <Button onClick={inputNum} value={0}>
          0
        </Button>
        <Button onClick={inputNum} value=".">
          .
        </Button>
        <CustomButton2 onClick={calculate}>=</CustomButton2>
      </Row>
    </Container>
  );
}
