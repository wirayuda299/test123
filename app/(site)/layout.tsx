import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <nav>Navbar</nav>
      {children}
    </main>
  );
}
