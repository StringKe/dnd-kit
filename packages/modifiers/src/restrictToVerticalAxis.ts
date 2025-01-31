import type {Modifier} from '@stringke/dnd-kit-core';

export const restrictToVerticalAxis: Modifier = ({transform}) => {
  return {
    ...transform,
    x: 0,
  };
};
