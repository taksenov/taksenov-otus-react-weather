import styled from 'styled-components';
import { Layout } from 'antd';

const { Sider } = Layout;

export const SiderStyled = styled(Sider)`
  .ant-menu-inline > .ant-menu-item-selected {
    font-weight: bolder;
    color: #37404b;
    background-color: transparent;

    &::after {
      border-right-width: 0px;
    }
  }

  .ant-menu {
    border: 0;

    .ant-menu-submenu-title,
    .ant-menu-item {
      display: flex;
      align-items: center;
      color: #37404b;
      font-size: 13px;
      letter-spacing: 0;
      line-height: 16px;
      padding-left: 0 !important;
      padding-top: 0;
      padding-bottom: 0;
      height: auto;
      line-height: normal;
      margin-top: 0;
      margin-bottom: 25px;

      span {
        font-size: 13px;
        letter-spacing: 0;
        line-height: 16px;
        height: 16px;
      }

      img {
        margin-right: 11px;
      }

      a {
        color: #37404b;
      }

      &::after {
        border-right-width: 0px;
      }
    }
  }
`;
