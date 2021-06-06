import styled from 'styled-components';
import { Layout } from 'antd';

const { Sider } = Layout;

export const SiderStyled = styled(Sider)`
  box-shadow: 1px 0 5px 0 rgba(13, 14, 72, 0.05),
    1px 0 1px 0 rgba(13, 14, 72, 0.03);
  z-index: 100;

  flex: 0 0 225px;
  width: 225px;
  max-width: 225px;
  min-width: 225px;
  position: fixed;
`;
