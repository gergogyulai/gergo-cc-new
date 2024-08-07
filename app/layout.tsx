import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import localFont from "next/font/local";
import { Analytics } from "@/components/analytics";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Gergo's Portfolio",
  description: "Indie developer, designer and maker. I build things for the web.",
  metadataBase: new URL('https://gergo.cc'),
  openGraph: {
    title: "Gergo's Portfolio",
    description: "Indie developer, designer and maker. I build things for the web.",
    type: "website",
    images: [
        {
        url: "/og-image.png",
        width: 1380,
        height: 934,
        alt: "Gergo's Portfolio",
      }
    ]
  },
};


export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <link rel="icon" href="favicon.png" type="image/x-icon" />
        <Analytics />
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="font-sans flex flex-col items-center min-h-screen py-16 px-10 gap-16 container">
              {children}
            </div>
          </ThemeProvider>
        </body>
    </html>
  );
}