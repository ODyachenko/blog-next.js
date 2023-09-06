import './globals.scss';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import ReduxProvider from '@/redux/Provider';

const inter = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Blog app',
  description: 'Blog app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
