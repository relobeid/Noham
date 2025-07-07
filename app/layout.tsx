import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthSessionProvider } from '@/components/providers/session-provider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NoHam - Your Trust Layer for Remote Hiring',
  description: 'NoHam helps founders catch resume red flags and GitHub silence before they hire their next engineer.',
  keywords: ['hiring', 'trust', 'remote work', 'background check', 'github analysis', 'resume verification', 'founder tools'],
  authors: [{ name: 'NoHam Team' }],
  creator: 'NoHam Team',
  publisher: 'NoHam',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '64x64', type: 'image/png' },
      { url: '/logo.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
      { url: '/logo.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo.png', sizes: '512x512', type: 'image/png' },
    ],
    other: [
      { url: '/logo.png', sizes: '96x96', type: 'image/png' },
    ],
  },
  metadataBase: new URL('https://noham.dev'),
  openGraph: {
    title: 'NoHam - Your Trust Layer for Remote Hiring',
    description: 'NoHam helps founders catch resume red flags and GitHub silence before they hire their next engineer.',
    url: 'https://noham.dev',
    siteName: 'NoHam',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'NoHam Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NoHam - Your Trust Layer for Remote Hiring',
    description: 'NoHam helps founders catch resume red flags and GitHub silence before they hire their next engineer.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} font-sans antialiased bg-brand-slate text-white`}>
        <AuthSessionProvider>
          <div className="min-h-screen bg-brand-slate">
            {children}
          </div>
        </AuthSessionProvider>
      </body>
    </html>
  );
} 