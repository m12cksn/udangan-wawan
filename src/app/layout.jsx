// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { poppins } from "./fonts";

export const metadata = {
  title: "Walimatul Khitan Arsyad",
  description: "Tasyukuran Khitan Arsyad",
  icons: {
    icon: "/favicon.ico", // Pastikan sesuai dengan path di folder public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
