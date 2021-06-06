import styled from 'styled-components';
import { Input } from 'antd';

export const InputStyled = styled(Input)`
  border: 1px solid rgba(214, 220, 227, 0.5);
  border-radius: 4px;
  background-color: #ffffff;

  font-family: Roboto, sans-serif;
  font-size: 13px !important;
  letter-spacing: 0;
  line-height: 17px;

  &:active,
  &:focus {
    border: 1px solid #66acac;
    box-shadow: none !important;
  }
`;
