import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://schedence.xyz"),
  title: "Schedence — Academic Scheduling & Faculty Workload Management",
  description:
    "Schedence helps higher-education institutions manage faculty workloads, scheduling constraints, timetable generation, and academic scheduling conflicts.",
  keywords: [
    "academic scheduling",
    "faculty workload management",
    "timetable generation",
    "university scheduling software",
    "course timetable solver",
    "higher ed edtech",
    "classroom allocation",
    "curriculum scheduling"
  ],
  authors: [{ name: "Schedence" }],
  creator: "Schedence",
  publisher: "Schedence",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://schedence.xyz",
    siteName: "Schedence",
    title: "Schedence — Academic Scheduling & Faculty Workload Management",
    description:
      "Schedence helps higher-education institutions manage faculty workloads, scheduling constraints, timetable generation, and academic scheduling conflicts.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Schedence — Academic Scheduling & Faculty Workload Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schedence — Academic Scheduling & Faculty Workload Management",
    description:
      "Schedence helps higher-education institutions manage faculty workloads, scheduling constraints, timetable generation, and academic scheduling conflicts.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
