import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Advaith Manoj | Software Development Engineer & Systems Architecture',
  description: 'Portfolio of Advaith Manoj - Software Development Engineer specializing in FastAPI, Spring Boot, React, Next.js, and Systems Architecture.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-track-50 text-track-text dark:bg-carbon-900 dark:text-[#f3f4f6] font-body transition-colors duration-300 antialiased selection:bg-papaya selection:text-white">
        {/* Racing Ambient Glow Effects */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-papaya/10 dark:bg-papaya/15 blur-[120px] rounded-full"></div>
          <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-papaya/5 dark:bg-papaya/10 blur-[100px] rounded-full"></div>
          <div className="absolute inset-0 carbon-grid opacity-60 pointer-events-none"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
