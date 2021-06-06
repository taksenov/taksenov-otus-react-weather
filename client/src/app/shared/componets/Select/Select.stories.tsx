import * as React from 'react';
import { storiesOf } from '@storybook/react';
import 'antd/dist/antd.css';
import '../../../../App.scss';

// import Select from './Select';

const stories = storiesOf('SelectionLoanProduct Form', module);

// Desctop story
stories.add('Select', () => {
  return (
    <div
      style={{
        maxWidth: '1300px',
        borderRight: '1px solid #c1c1c1',
        borderBottom: '1px solid #c1c1c1',
        padding: '20px',
      }}
    >
      {/* <Select isError={false} isGood={false} label="" placeholder="" /> */}
    </div>
  );
});

// Mobile story
stories.add('Select Mobile', () => {
  return (
    <div
      style={{
        maxWidth: '375px',
        borderRight: '1px solid #c1c1c1',
        borderBottom: '1px solid #c1c1c1',
        padding: '15px',
      }}
    >
      {/* <Select isError={false} isGood={false} label="" placeholder="" />
      <Select isError isGood={false} label="" placeholder="" />
      <Select
        isError={false}
        isGood
        label=""
        placeholder="Эффект растворенных денег"
      /> */}
    </div>
  );
});
