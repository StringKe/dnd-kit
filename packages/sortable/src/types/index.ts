import type {ClientRect} from '@stringke/dnd-kit-core';
import type {Transform} from '@stringke/dnd-kit-utilities';

export type SortingStrategy = (args: {
  activeNodeRect: ClientRect | null;
  activeIndex: number;
  index: number;
  rects: ClientRect[];
  overIndex: number;
}) => Transform | null;
