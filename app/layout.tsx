import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthSessionProvider } from '@/components/providers/session-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NoHam - Say No To Sohams',
  description: 'Trust Layer for Remote Hiring - Detect hiring risks through resume and GitHub analysis',
  keywords: ['hiring', 'trust', 'remote work', 'background check', 'github analysis', 'resume parsing'],
  authors: [{ name: 'NoHam Team' }],
  creator: 'NoHam Team',
  publisher: 'NoHam',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://noham.dev'),
  openGraph: {
    title: 'NoHam - Say No To Sohams',
    description: 'Trust Layer for Remote Hiring - Detect hiring risks through resume and GitHub analysis',
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
    title: 'NoHam - Say No To Sohams',
    description: 'Trust Layer for Remote Hiring - Detect hiring risks through resume and GitHub analysis',
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
    <html lang="en">
      <body className={inter.className}>
        <AuthSessionProvider>
          <div className="min-h-screen bg-background font-sans antialiased">
            {children}
          </div>
        </AuthSessionProvider>
      </body>
    </html>
  );
} 