import * as React from 'react';
import { storiesOf } from '@storybook/react';
import 'antd/dist/antd.css';
import '../../../../App.scss';

import Input from './Input';

const stories = storiesOf('SelectionLoanProduct Form', module);

// Desctop story
stories.add('Input', () => {
  return (
    <div
      style={{
        maxWidth: '1300px',
        borderRight: '1px solid #c1c1c1',
        borderBottom: '1px solid #c1c1c1',
        padding: '20px',
      }}
    >
      <Input
        isError={false}
        isGood={false}
        label=""
        placeholder=""
        isSuffix={false}
        suffix=""
      />
    </div>
  );
});

// Mobile story
stories.add('Input Mobile', () => {
  return (
    <div
      style={{
        maxWidth: '375px',
        borderRight: '1px solid #c1c1c1',
        borderBottom: '1px solid #c1c1c1',
        padding: '15px',
      }}
    >
      <Input
        isError
        isGood={false}
        label=""
        placeholder=""
        isSuffix
        suffix="л."
      />
      <Input
        isError={false}
        isGood={false}
        label="label Azaza ozozoz"
        placeholder=""
        isSuffix={false}
        suffix=""
      />
      <Input
        isError={false}
        isGood
        label="label Azaza ozozoz"
        placeholder=""
        isSuffix={false}
        suffix=""
      />
    </div>
  );
});
