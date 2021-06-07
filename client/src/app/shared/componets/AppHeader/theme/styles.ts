import styled from 'styled-components';
import { Layout } from 'antd';

const { Header } = Layout;

export const HeaderStyled = styled(Header)`
  background-color: #ffffff;
  display: flex;
  padding: 0;
  z-index: 10;
  box-shadow: 0 3px 10px 0 rgba(13, 14, 72, 0.07),
    0 1px 1px 0 rgba(13, 14, 72, 0.05);

  height: 60px;
  line-height: 60px;

  & .row {
    display: flex;
    align-items: center;
    height: 100%;
  }

  & .rowSearch {
    flex-grow: 2;
    padding-left: 20px;
  }

  & .searchInput {
    width: 215px;
  }

  & .rowSupport {
    flex: 0 0 167px;
  }

  & .rowLoanSelectionButton {
    flex: 0 0 200px;
    padding-left: 20px;
    padding-right: 20px;
  }

  & .rowUserData {
    flex-grow: 0;
  }

  & .supportBtnLinkText {
    & a {
      color: #37404b;
      font-family: Roboto, sans-serif;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0;
      line-height: 17px;
    }
  }
`;
