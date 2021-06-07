import styled from 'styled-components';
import { Layout } from 'antd';

const { Header } = Layout;

export const HeaderStyled = styled(Header)`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 0;
  z-index: 10;

  height: 60px;
  line-height: 60px;

  header {
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    padding: 0;
    z-index: 10;
  }
`;
