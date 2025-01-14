import type {Modifier} from '@stringke/dnd-kit-core';
import {restrictToBoundingRect} from './utilities';

export const restrictToParentElement: Modifier = ({
  transform,
  activeNodeRect,
  containerNodeRect,
}) => {
  if (!activeNodeRect || !containerNodeRect) {
    return transform;
  }

  return restrictToBoundingRect(transform, activeNodeRect, containerNodeRect);
};
