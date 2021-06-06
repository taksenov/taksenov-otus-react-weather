import styled from 'styled-components';
import { Checkbox } from 'antd';

export const CheckBoxStyled = styled(Checkbox)`
  .ant-checkbox-input {
    opacity: 1;
  }
  .ant-checkbox-inner {
    display: none;
  }
  .ant-checkbox-checked::after {
    border-width: 0;
  }
  input {
    position: relative;
    appearance: none;
    outline: none;
    width: 42px !important;
    height: 28px !important;
    background-color: #ffffff;
    border: 3px solid #d6dce3;
    border-radius: 42px;
    box-shadow: inset -13px 0 0 0 #d6dce3;
    transition-duration: 200ms;
  }
  input:after {
    content: '';
    position: absolute;
    width: 22px;
    height: 22px;
    background-color: transparent;
    border-radius: 100%;
  }
  input:checked {
    border-color: #4ed164;
    box-shadow: inset 13px 0 0 0 #4ed164;
  }
  input:checked:after {
    left: 13px;
  }
`;
