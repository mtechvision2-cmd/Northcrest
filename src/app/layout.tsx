import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Northcrest Construction Group | General Contractor in Raleigh, NC",
  description:
    "Northcrest Construction Group is a general contractor in Raleigh, North Carolina. Commercial, residential, industrial and renovation projects built on schedule since 1998.",
  keywords: [
    "general contractor Raleigh NC",
    "commercial construction North Carolina",
    "design build contractor",
    "custom home builder",
    "Northcrest Construction Group",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Northcrest Construction Group",
    description:
      "We build what lasts. Commercial, residential and industrial construction across the Southeast since 1998.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-white text-foreground">
        {children}
      </body>
    </html>
  );
}
