import "@/styles/globals.css"
import { Metadata } from "next"
import Head from "next/head"
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico?v=2",
        shortcut: "/favicon-16x16.png?v=2",
        apple: "/apple-touch-icon.png?v=2",
    },
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <>
            <html lang="en" suppressHydrationWarning>
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2"/>
                    <link rel="manifest" href="/site.webmanifest?v=2"/>
                    <link rel="mask-icon" href="/safari-pinned-tab.svg?v=2" color="#5bbad5"/>
                    <link rel="shortcut icon" href="/favicon.ico?v=2"/>
                    <meta name="msapplication-TileColor" content="#da532c"/>
                    <meta property="og:image" content="/og.png" />
                    <meta property="og:image:type" content="image/png" />
                    <meta property="og:image:width" content="1280" />
                    <meta property="og:image:height" content="720" />
                </Head>
                <body
                  className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                  )}
                >
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                        <div className="px-8">{children}</div>
                        <TailwindIndicator />
                        <Analytics/>
                    </ThemeProvider>
                </body>
            </html>
        </>
    )
}
