import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ravion | Raihan Achmad Suhada",
  description:
    "Personal portfolio of Raihan Achmad Suhada under the Ravion identity, focused on web development, business systems, project management, AI-assisted workflows, and digital product delivery.",
  keywords: [
    "Ravion",
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
  openGraph: {
    title: "Ravion | Raihan Achmad Suhada",
    description:
      "Ravion is the personal brand identity of Raihan Achmad Suhada, representing his work in web development, business systems, project management, AI-assisted workflows, and digital product delivery.",
    type: "website",
    locale: "en_US",
  },
};

const themeScript = `
(function () {
  try {
    var theme = localStorage.getItem("theme");
    var isDark = theme === "dark";

    document.documentElement.classList.toggle("dark", isDark);

    var favicon = document.getElementById("theme-favicon");
    var appleIcon = document.getElementById("theme-apple-icon");

    if (favicon) {
      favicon.setAttribute(
        "href",
        isDark ? "/brand/ravion-icon-dark.png" : "/brand/ravion-icon-light.png"
      );
    }

    if (appleIcon) {
      appleIcon.setAttribute(
        "href",
        isDark ? "/brand/ravion-icon-dark.png" : "/brand/ravion-icon-light.png"
      );
    }
  } catch (error) {
    document.documentElement.classList.remove("dark");
  }
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
        <link
          id="theme-favicon"
          rel="icon"
          href="/brand/ravion-icon-light.png"
        />
        <link
          id="theme-apple-icon"
          rel="apple-touch-icon"
          href="/brand/ravion-icon-light.png"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
