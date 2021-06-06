import * as React from 'react';
import { storiesOf } from '@storybook/react';
import 'antd/dist/antd.css';
import '../../../../App.scss';

import CheckBox from './CheckBox';

const stories = storiesOf('SelectionLoanProduct Form', module);

// Desctop story
stories.add('CheckBox', () => {
  return (
    <div
      style={{
        maxWidth: '1300px',
        borderRight: '1px solid #c1c1c1',
        borderBottom: '1px solid #c1c1c1',
        padding: '20px',
      }}
    >
      <CheckBox label="данные туда сюда" />
    </div>
  );
});

// Mobile story
stories.add('CheckBox Mobile', () => {
  return (
    <div
      style={{
        maxWidth: '375px',
        borderRight: '1px solid #c1c1c1',
        borderBottom: '1px solid #c1c1c1',
        padding: '15px',
      }}
    >
      <CheckBox label="данные туда сюда" />
    </div>
  );
});
