export type CertificateType = "pdf" | "image";

export type Certificate = {
  title: string;
  issuer: string;
  year: string;
  certificateUrl: string;
  type: CertificateType;
};

export const certificates: Certificate[] = [
  {
    title: "Logika dan Algoritma Pemrograman",
    issuer: "GAMELAB Indonesia",
    year: "Feb 2024",
    certificateUrl: "/certificates/certificate-1.pdf",
    type: "pdf",
  },
  {
    title: "Express, JSON, dan REST API",
    issuer: "GAMELAB Indonesia",
    year: "May 2024",
    certificateUrl: "/certificates/certificate-2.pdf",
    type: "pdf",
  },
  {
    title: "NodeJS dan MongoDB",
    issuer: "GAMELAB Indonesia",
    year: "May 2024",
    certificateUrl: "/certificates/certificate-3.pdf",
    type: "pdf",
  },
  {
    title: "NodeJS dan MySQL",
    issuer: "GAMELAB Indonesia",
    year: "Apr 2024",
    certificateUrl: "/certificates/certificate-4.pdf",
    type: "pdf",
  },
  {
    title: "JavaScript dan jQuery",
    issuer: "GAMELAB Indonesia",
    year: "Mar 2024",
    certificateUrl: "/certificates/certificate-5.pdf",
    type: "pdf",
  },
  {
    title: "HTML, CSS, dan JavaScript",
    issuer: "GAMELAB Indonesia",
    year: "Mar 2024",
    certificateUrl: "/certificates/certificate-6.pdf",
    type: "pdf",
  },
  {
    title: "Fullstack Next JS: Realtime Point of Sale Apps",
    issuer: "WPU Course",
    year: "Aug 2026",
    certificateUrl: "/certificates/certificate-7.png",
    type: "image",
  },
  {
    title: "React JS Bootcamp",
    issuer: "WPU Course",
    year: "Aug 2026",
    certificateUrl: "/certificates/certificate-8.png",
    type: "image",
  },
  {
    title: "MERN Stack Course",
    issuer: "WPU Course",
    year: "Aug 2026",
    certificateUrl: "/certificates/certificate-9.png",
    type: "image",
  },
];
