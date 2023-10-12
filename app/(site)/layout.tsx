import { ThemeProvider } from '@/components/shared/TopBar/ThemeProvider';
import type { ReactNode } from 'react';

import BottomBar from '@/components/shared/BottomBar';
import TopBar from '@/components/shared/TopBar/TopBar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <TopBar />

        <main>{children}</main>

        <BottomBar />
      </ThemeProvider>
    </main>
  );
}
