import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
    title: "NIAGADS Template next.js Application",
    description: "https://github.com/NIAGADS/nextjs-template",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
                </body>
        </html>
    );
}
