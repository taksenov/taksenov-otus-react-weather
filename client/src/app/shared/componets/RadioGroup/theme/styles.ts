import styled from 'styled-components';
import { Radio } from 'antd';

const { Group } = Radio;

export const RadioGroupStyled = styled(Group)`
  .ant-radio-button-wrapper {
    height: 40px;
    line-height: 40px;
    margin-top: 6px;
    margin-right: 6px;

    border: none;
    border-radius: 4px;
    background-color: rgba(214, 220, 227, 0.25);

    color: #37404b;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    letter-spacing: 0;
  }

  .ant-radio-button-wrapper:not([class*=' ant-radio-button-wrapper-checked']) {
    color: #37404b !important;
  }

  .ant-radio-button-wrapper:not(:first-child)::before {
    background-color: transparent;
  }

  .ant-radio-button-checked {
    border-radius: 4px;
  }

  .ant-radio-button-wrapper-checked {
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    letter-spacing: 0;
    text-align: center;
    box-shadow: 0 3px 10px 0 rgba(13, 14, 72, 0.07),
      0 1px 1px 0 rgba(13, 14, 72, 0.05);
  }

  .ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-child {
    border-right-color: transparent;
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    background: #ffffff;
    border-color: transparent;
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus,
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active,
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
    background: transparent;
    border-color: transparent;
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within {
    box-shadow: 0 3px 10px 0 rgba(13, 14, 72, 0.07),
      0 1px 1px 0 rgba(13, 14, 72, 0.05);
  }
`;
