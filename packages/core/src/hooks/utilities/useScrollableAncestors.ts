import {useLazyMemo} from '@stringke/dnd-kit-utilities';
import {useEffect, useRef} from 'react';
import {getScrollableAncestors} from '../../utilities';

const defaultValue: Element[] = [];

export function useScrollableAncestors(node: HTMLElement | null) {
  const previousNode = useRef(node);

  const ancestors = useLazyMemo<Element[]>(
    (previousValue) => {
      if (!node) {
        return defaultValue;
      }

      if (
        previousValue &&
        node &&
        previousNode.current &&
        node.parentNode === previousNode.current.parentNode
      ) {
        return previousValue;
      }

      return getScrollableAncestors(node);
    },
    [node]
  );

  useEffect(() => {
    previousNode.current = node;
  }, [node]);

  return ancestors;
}
