import styled from 'styled-components';
import { Select } from 'antd';

export const SelectStyled = styled(Select)`
  height: 40px;
  border: 1px solid #ebeef2;
  border-radius: 4px;
  background-color: #ffffff;

  .ant-select-selector {
    height: 37px !important;
    border: none !important;
  }

  .ant-select-selection-placeholder {
    height: 40px;
    border: none;
    padding-top: 4px !important;
    color: #73797f;
    font-family: Roboto, sans-serif;
    font-size: 13px;
    letter-spacing: 0;
  }

  .ant-select-selection-item {
    height: 40px;
    border: none;
    padding-top: 4px !important;
    color: #37404b;
    font-family: Roboto, sans-serif;
    font-size: 13px;
    letter-spacing: 0;
  }

  .ant-select-selection-search {
    height: 40px;
    border: none;
  }

  .ant-select-selection-search-input {
    height: 40px !important;
  }

  &.ant-select-focused.ant-select-single:not(.ant-select-customize-input)
    .ant-select-selector {
    box-shadow: none !important;
  }
  &.ant-select-focused.ant-select-single:not(.ant-select-customize-input) {
    border: 1px solid #66acac !important;
  }
`;
