import React from "react";
import * as s from "./Styled.SearchList";
import styled from "styled-components";

const Facilities = ({ name, ischecked, setIsChecked }) => {
  const handleCheck = name => {
    ischecked.includes(name)
      ? setIsChecked(ischecked.filter(el => el !== name))
      : setIsChecked([...ischecked, name]);
  };

  return (
    <s.FacilityCheckBox>
      <CheckBoxInput
        type="checkbox"
        name={name}
        onChange={() => {
          handleCheck(name);
        }}
        checked={ischecked.includes(name)}
      />
      <s.FacilityCheckBoxLabel for={name}>{name}</s.FacilityCheckBoxLabel>
    </s.FacilityCheckBox>
  );
};

const CheckBoxInput = styled.input`
  width: 17px;
  height: 17px; ;
`;

export default Facilities;
