import React from 'react';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';
import { withKnobs, text, radios, boolean } from '@storybook/addon-knobs';

export default {
  title: 'components/ButtonGroup',
  component: ButtonGroup,
  decorators: [withKnobs],
};

export const buttonGroup = (): React.ReactElement => {
  const direction = radios('direcion', { Row: 'row', Column: 'column' }, 'row');
  const rightAlign = boolean('rightAlign', false);
  const gap = text('gap', '0.5rem');

  return (
    <ButtonGroup direction={direction} rightAlign={rightAlign} gap={gap}>
      <Button theme="tertiary">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

buttonGroup.story = {
  name: 'Default',
};

export const rightAlign = (): React.ReactElement => {
  return (
    <ButtonGroup rightAlign>
      <Button theme="tertiary">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

export const column = (): React.ReactElement => {
  return (
    <ButtonGroup direction="column">
      <Button theme="tertiary">CLICK ME</Button>
      <Button>CLICK ME</Button>
    </ButtonGroup>
  );
};

export const customGap = (): React.ReactElement => {
  return (
    <ButtonGroup gap="1rem">
      <Button theme="tertiary">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

export const customGapColumn = (): React.ReactElement => {
  return (
    <ButtonGroup direction="column" gap="1rem">
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
    </ButtonGroup>
  );
};
