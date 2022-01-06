import type {Modifier} from '@stringke/dnd-kit-core';

export const restrictToHorizontalAxis: Modifier = ({transform}) => {
  return {
    ...transform,
    y: 0,
  };
};
