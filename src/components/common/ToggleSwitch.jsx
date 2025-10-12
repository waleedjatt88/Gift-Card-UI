
import React from 'react';
import styled from 'styled-components';

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #f59e0b; /* Orange color when on */
  }

  &:checked + span:before {
    transform: translateX(22px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
`;

const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <SwitchLabel>
      <SwitchInput type="checkbox" checked={checked} onChange={onChange} />
      <Slider />
    </SwitchLabel>
  );
};

export default ToggleSwitch;