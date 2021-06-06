import * as React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

interface IProps {
  isMobile?: boolean;
}

const Spinner: React.FC<IProps> = props => {
  const { isMobile = false } = props;

  return (
    <Spin
      indicator={
        <LoadingOutlined
          style={{
            fontSize: '16px',
            color: '#fff',
            marginLeft: isMobile ? '0px' : '8px',
          }}
          spin
        />
      }
    />
  );
};

export default Spinner;
