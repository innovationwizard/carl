import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Carl - CloudWalk AI Assistant',
  description: 'CloudWalk AI chatbot embodying cosmic consciousness and market evolution',
  keywords: ['CloudWalk', 'AI', 'chatbot', 'fintech', 'Carl Sagan', 'Carl Menger'],
  authors: [{ name: 'CloudWalk Inc.' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}