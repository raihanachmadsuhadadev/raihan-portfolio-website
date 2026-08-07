import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raihan Achmad Suhada | Fullstack Developer & Project Manager",
  description:
    "Personal portfolio website of Raihan Achmad Suhada, a Fullstack Developer and Project Manager focused on web applications, admin dashboards, APIs, database-driven systems, and business applications.",
  keywords: [
    "Raihan Achmad Suhada",
    "Fullstack Developer",
    "Project Manager",
    "Laravel Developer",
    "Next.js Developer",
    "React Developer",
    "Portfolio Website",
    "Web Developer Indonesia",
  ],
  authors: [{ name: "Raihan Achmad Suhada" }],
  creator: "Raihan Achmad Suhada",
  openGraph: {
    title: "Raihan Achmad Suhada | Fullstack Developer & Project Manager",
    description:
      "Fullstack Developer and Project Manager focused on web applications, admin dashboards, APIs, database-driven systems, and business applications.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}