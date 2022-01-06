import {
  HiddenText,
  LiveRegion,
  useAnnouncement,
} from '@stringke/dnd-kit-accessibility';
import {useUniqueId} from '@stringke/dnd-kit-utilities';
import React, {useEffect, useMemo, useState} from 'react';
import {createPortal} from 'react-dom';
import {DndMonitorArguments, useDndMonitor} from '../../hooks/monitor';
import type {UniqueIdentifier} from '../../types';
import {defaultAnnouncements} from './defaults';
import type {Announcements, ScreenReaderInstructions} from './types';

interface Props {
  announcements?: Announcements;
  screenReaderInstructions: ScreenReaderInstructions;
  hiddenTextDescribedById: UniqueIdentifier;
}

export function Accessibility({
  announcements = defaultAnnouncements,
  hiddenTextDescribedById,
  screenReaderInstructions,
}: Props) {
  const {announce, announcement} = useAnnouncement();
  const liveRegionId = useUniqueId(`DndLiveRegion`);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useDndMonitor(
    useMemo<DndMonitorArguments>(
      () => ({
        onDragStart({active}) {
          announce(announcements.onDragStart(active.id));
        },
        onDragMove({active, over}) {
          if (announcements.onDragMove) {
            announce(announcements.onDragMove(active.id, over?.id));
          }
        },
        onDragOver({active, over}) {
          announce(announcements.onDragOver(active.id, over?.id));
        },
        onDragEnd({active, over}) {
          announce(announcements.onDragEnd(active.id, over?.id));
        },
        onDragCancel({active}) {
          announce(announcements.onDragCancel(active.id));
        },
      }),
      [announce, announcements]
    )
  );

  return mounted
    ? createPortal(
        <>
          <HiddenText
            id={hiddenTextDescribedById}
            value={screenReaderInstructions.draggable}
          />
          <LiveRegion id={liveRegionId} announcement={announcement} />
        </>,
        document.body
      )
    : null;
}
