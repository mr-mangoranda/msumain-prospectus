import type {Metadata} from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css'; // Global styles
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700', '800', '900'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'MSU Main Campus Prospectus Portal',
  description: 'Centralized digital prospectus portal for incoming freshmen.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans text-slate-800 bg-mesh-light min-h-screen`} suppressHydrationWarning>
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
