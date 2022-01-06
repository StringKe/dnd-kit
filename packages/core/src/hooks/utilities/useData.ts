import {useIsomorphicLayoutEffect} from '@stringke/dnd-kit-utilities';
import {useRef} from 'react';
import type {Data} from '../../store';

export function useData(data: Data | undefined) {
  const dataRef = useRef(data);

  useIsomorphicLayoutEffect(() => {
    if (dataRef.current !== data) {
      dataRef.current = data;
    }
  }, [data]);

  return dataRef;
}
