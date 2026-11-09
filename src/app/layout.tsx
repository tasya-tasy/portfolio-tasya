import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tasya Anisa | Technology Enthusiast & Entrepreneur",
  description:
    "Portfolio Tasya Anisa — Fresh Graduate Teknik Informatika, Politeknik Negeri Lhokseumawe. Technology Enthusiast, Business & Entrepreneurship, Digital Innovation.",
  keywords: [
    "Tasya Anisa",
    "Teknik Informatika",
    "Politeknik Negeri Lhokseumawe",
    "Portfolio",
    "Fresh Graduate",
    "CNN",
    "Deep Learning",
  ],
  authors: [{ name: "Tasya Anisa" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    title: "Tasya Anisa | Technology Enthusiast & Entrepreneur",
    description:
      "Portfolio Tasya Anisa — Fresh Graduate Teknik Informatika dengan minat di teknologi, data, dan kewirausahaan.",
    siteName: "Tasya Anisa Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
