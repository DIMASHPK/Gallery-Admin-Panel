/* eslint-disable react-hooks/exhaustive-deps */

import { RefObject, useEffect, useState } from 'react';

type Args = IntersectionObserverInit & {
  freezeOnceVisible?: boolean;
};

export default (
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false,
  }: Args = {
    threshold: 0,
    root: null,
    rootMargin: '0%',
    freezeOnceVisible: false,
  }
): IntersectionObserverEntry | undefined => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([observerEntry]: IntersectionObserverEntry[]): void => {
    setEntry(observerEntry);
  };

  useEffect(() => {
    const hasIOSupport = !!window.IntersectionObserver;
    const node = elementRef?.current;

    if (!hasIOSupport || frozen || !node) return undefined;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [
    elementRef?.current,
    JSON.stringify(threshold),
    root,
    rootMargin,
    frozen,
  ]);

  return entry;
};
