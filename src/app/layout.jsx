// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { poppins } from "./fonts";

export const metadata = {
  title: "Undangan Arsyad",
  description:
    "Undangan Walimatul Khitan dan Khotmil Quran Arsyad Haafizh Virendra",
  icons: {
    icon: "/favicon.ico", // Pastikan sesuai dengan path di folder public
  },
  openGraph: {
    title: "Undangan Arsyad",
    description:
      "Undangan Walimatul Khitan dan Khotmil Quran Arsyad Haafizh Virendra",
    url: "https://undanganarsyad.vercel.app",
    type: "website",
    images: [
      {
        url: "https://undanganarsyad.vercel.app/images/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Undangan Arsyad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Undangan Arsyad",
    description: "Walimatul Khitan Arsyad Haafizh Virendra",
    images: ["https://undanganarsyad.vercel.app/images/thumbnail.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
