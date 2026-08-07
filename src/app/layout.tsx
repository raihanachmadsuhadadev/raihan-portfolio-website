import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LUMENIX | Raihan Achmad Suhada",
  description:
    "Personal portfolio of Raihan Achmad Suhada under the LUMENIX identity, focused on web development, business systems, project management, AI-assisted workflows, and digital product delivery.",
  keywords: [
    "LUMENIX",
    "Raihan Achmad Suhada",
    "Fullstack Developer",
    "Project Manager",
    "Web Developer",
    "Mobile Developer",
    "AI Enthusiast",
    "Laravel Developer",
    "Next.js Developer",
    "React Developer",
    "Portfolio Website",
    "Web Developer Indonesia",
  ],
  authors: [{ name: "Raihan Achmad Suhada" }],
  creator: "Raihan Achmad Suhada",
  icons: {
    icon: "/brand/lumenix-icon.png",
    shortcut: "/brand/lumenix-icon.png",
    apple: "/brand/lumenix-icon.png",
  },
  openGraph: {
    title: "LUMENIX | Raihan Achmad Suhada",
    description:
      "LUMENIX is the personal brand identity of Raihan Achmad Suhada, representing his work in web development, business systems, project management, AI-assisted workflows, and digital product delivery.",
    type: "website",
    locale: "en_US",
  },
};

const themeScript = `
(function () {
  try {
    var theme = localStorage.getItem("theme");
    var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (theme === "dark" || (!theme && systemDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  } catch (error) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}