import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonStyled = styled(Button)`
  height: 100%;
  border: 1px solid rgba(214, 220, 227, 0.4);
  border-bottom: 0;
  border-left: 0;
  box-shadow: none;

  img {
    margin-right: 10px;
  }

  p {
    font-size: 11px;
    margin-bottom: 5px;
  }

  &:hover,
  &:active,
  &:focus {
    cursor: pointer;
    border-bottom: 0px !important;
    border-left: 0 !important;
    box-shadow: none !important;
    color: rgba(0, 0, 0, 0.65) !important;
    border-color: rgba(214, 220, 227, 0.4);
  }

  /* IDEA: пока это не ссылка, то не нужно устанавливать отступ сверху */
  /* line-height: 1.5715 !important;
  padding-top: 11px !important; */
`;
