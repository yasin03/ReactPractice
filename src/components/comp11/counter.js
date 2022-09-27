import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const artir = (newCount) => {
    setCounter(newCount);
  };
  const azalt = (newCount) => {
    setCounter(newCount);
  };

  useEffect(() => {
    document.title = counter;
  }, [counter]);

  return (
    <div>
      <Container>
        <h1>{counter}</h1>
        <Button className="btn btn-primary" onClick={() => artir(counter + 1)}>
          Arttır
        </Button>
        <Button className="btn btn-warning" onClick={() => artir(counter - 1)}>
          Azalt
        </Button>
        <Button className="btn btn-danger" onClick={() => setCounter(0)}>
          Reset
        </Button>
      </Container>
    </div>
  );
};

export default Counter;
