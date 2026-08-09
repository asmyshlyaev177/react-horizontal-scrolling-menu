import * as React from 'react';

const emptySubscribe = () => () => {};

// Render children only after hydration. Used for demos too heavy to
// server-render (the 5,000-item performance rail would be ~1 MB of HTML).
// useSyncExternalStore: the server snapshot is false, the client one is
// true — React reconciles the difference right after hydration, no
// setState-in-effect needed.
export function ClientOnly({
  children,
  fallback = null,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  return <>{mounted ? children : fallback}</>;
}
