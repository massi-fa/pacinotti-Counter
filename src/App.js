import React, { useState } from 'react';
import styled from 'styled-components';

//Dichiarazione Styled Components:
const Div = styled.div`
  margin: 100px auto;
  padding: 50px;
  background-color: #66A182;
  max-width: 500px;
  border: 2px solid #2E4057;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  color: #2E4057;
  width: 200px;
  margin: auto;
  text-align: center;
  font-size: 70px;
`;

const Button = styled.button`
  margin: 20px auto;
  background-color: #CAFFB9;
  color: #2E4057;
  font-size: 20px;
  border: 2px solid #2D5741;
  border-radius: 5px;
  padding: 10px;
  width: 200px;
`;

const App = () => {
  //Dichiarazione Variabili stato:
  const [state, setState] = useState(0)

  //Chiamate e Dichiarazioni Funzioni:
  const contatore = () => {
    setState(state + 1);
    console.log(state);
  };

  const reset = () => {
    setState(0);
    console.log(state);
  };

  //Struttura del componente (HTML):
  return(
    <Div>
      <H1>{state}</H1>
      <Button onClick={contatore}>
        Click Me!
      </Button>
      <Button onClick={reset}>
        Reset Me!
      </Button>
    </Div>
  )
};

export default App;
