import styled from 'styled-components';
import { Layout } from 'antd';

import { LAYOUT_MINIMUM_ALLOWABLE_WIDTH } from '../../../constants/Defaults/constants';

const { Footer } = Layout;

export const FooterStyled = styled(Footer)`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  height: 64px;
  min-width: ${LAYOUT_MINIMUM_ALLOWABLE_WIDTH}px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 -3px 10px 0 rgba(0, 0, 0, 0.07),
    0 -1px 1px 0 rgba(0, 0, 0, 0.05);
`;
