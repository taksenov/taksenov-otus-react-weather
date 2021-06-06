import styled from 'styled-components';
import { Radio } from 'antd';

const { Group } = Radio;

export const RadioGroupStyled = styled(Group)`
  .ant-radio-button-wrapper {
    font-family: 'Roboto', sans-serif;
    font-style: normal;

    height: fit-content;
    margin-top: 6px;
    margin-right: 6px;

    border: none;
    border-radius: 4px;
    background-color: rgba(214, 220, 227, 0.25);

    color: #37404b;
    font-family: Roboto, sans-serif;
    font-size: 13px;
    letter-spacing: 0;

    padding: 23px 20px 21px;

    min-width: 205px;
    min-height: 90px;

    @media (max-width: 575.98px) {
      padding: 13px 12px 11px;
      min-height: 70px;
      width: 100%;
    }
  }

  .ant-radio-button-wrapper > span > div {
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    color: #37404b;
  }

  .ant-radio-button-wrapper > span > div:first-child {
    font-weight: bold;
    font-size: 22px;
    line-height: 17px;
    color: #82c17a;
    margin-bottom: 12px;
  }

  .ant-radio-button-wrapper:not(:first-child)::before {
    background-color: transparent;
  }

  .ant-radio-button-checked {
    border-radius: 4px;
  }

  .ant-radio-button-wrapper-checked {
    color: #66acac !important;
    font-family: Roboto, sans-serif;
    font-size: 13px;
    letter-spacing: 0;
    box-shadow: 0 3px 10px 0 rgba(13, 14, 72, 0.07),
      0 1px 1px 0 rgba(13, 14, 72, 0.05);
  }

  .ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-child {
    border-right-color: transparent;
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    color: #66acac;
    background: #ffffff;
    border-color: transparent;
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus,
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active,
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
    color: #66acac;
    background: transparent;
    border-color: transparent;
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within {
    box-shadow: 0 3px 10px 0 rgba(13, 14, 72, 0.07),
      0 1px 1px 0 rgba(13, 14, 72, 0.05);
  }
`;
