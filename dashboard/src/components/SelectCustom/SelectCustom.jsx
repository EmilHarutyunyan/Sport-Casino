import React, { useCallback, useState } from 'react'
// Styles
import { Wrapper, NavWrap, NavHead,  } from "./SelectCustom.styles";
import useHideShow from '../../hooks/useHideShow';
// Images

import arrowImg from "../../assets/images/arrow.png"
const SelectCustom = ({ onCustom,date,activeData,width }) => {

  const [headerRef, childrenRef, otherRef, setShowLinks, showLinks] =
    useHideShow();
  const [selectValue, setSelectValue] = useState(activeData);

  const handleClick = useCallback(
    (value) => {
      setShowLinks((show) => !show);
      setSelectValue(value);
      if (value === "Custom") {
        
        onCustom();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectValue]
  );

  return (
    <Wrapper width={width}>
      <NavHead onClick={() => setShowLinks((show) => !show)} ref={otherRef}>
        <p>{selectValue}</p>
        <img src={arrowImg} alt="arrow" />
      </NavHead>
      <NavWrap ref={headerRef} style={!showLinks ? { border: "none" } : null}>
        <ul ref={childrenRef}>
          {date.map((item) => {
            return (
              <li key={item.id} onClick={() => handleClick(item.value)}>
                {item.value}
              </li>
            );
          })}
        </ul>
      </NavWrap>
    </Wrapper>
  );
};

export default SelectCustom