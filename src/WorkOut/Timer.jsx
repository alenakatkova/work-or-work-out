import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Square = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  border: 1px solid black;
  
  &:after {
    content: "";
  display: block;
  padding-bottom: 100%;
  } 
`;


export default (props) => {
  return (<div>
    <Row>
      <Square>{props.round}</Square><Square>{props.exercise}</Square>
    </Row>
    <div>RRRRR</div>
    <Row>
      <Square>{props.minutes}</Square><Square>{props.seconds}</Square>
    </Row>
  </div>);
};