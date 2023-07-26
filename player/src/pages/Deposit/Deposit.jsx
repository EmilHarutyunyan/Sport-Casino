import React from 'react'
// Styles
import {Wrapper} from "./Deposit.styles"
import Subheading from '../../components/Subheading';
import PriceMethod from '../../components/PriceMethod/PriceMethod';
const Deposit = () => {
  return (
    <Wrapper>
      <Subheading />
      <PriceMethod title={"deposit"} desc={"Enter deposit amount."} />
    </Wrapper>
  );
}

export default Deposit