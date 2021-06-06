import * as React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

interface IPreloaderProps {
  size: 'small' | 'default' | 'large';
}

/**
 * Кастомный прелоадер на основе Spin adnt design
 *
 * @param {IPreloaderProps} size enum of 'small' | 'default' | 'large'
 * @returns
 */
const Preloader: React.FC<IPreloaderProps> = props => {
  const { size } = props;

  return <Spin size={size} indicator={<LoadingOutlined />} />;
};

export default Preloader;
