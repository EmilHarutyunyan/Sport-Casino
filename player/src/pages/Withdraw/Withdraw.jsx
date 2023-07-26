import React from 'react'
// Styles
import {Wrapper} from "./Withdraw.styles"
import Subheading from '../../components/Subheading'
import PriceMethod from '../../components/PriceMethod/PriceMethod'
const Withdraw = () => {
  return (
    <Wrapper>
      <Subheading />
      <PriceMethod title={"withdraw"} desc={"Enter amount to withdraw."} />
      {/* <PaymentMethod method={'WITHDRAW'}/> */}
    </Wrapper>
  );
}

export default Withdraw