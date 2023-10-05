import React from 'react';

export default function DashBroadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
