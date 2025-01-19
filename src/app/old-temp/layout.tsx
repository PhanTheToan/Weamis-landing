// File: D:\WORK\Weamis\weamis.com\src\app\old-temp\layout.tsx
import React from 'react';
import { Inter, Raleway } from "next/font/google";
import "~/assets/css/bootstrap.min.css";
import "~/assets/css/app.css";
import "~/assets/css/main.css";
import "~/assets/css/react-adjustment.css";

// Định nghĩa các font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

// Định nghĩa metadata với kiểu cụ thể
export const metadata: {
  title: string;
  description: string;
  icons: {
    icon: string[];
  };
} = {
  title: "Weamis Tech Solutions",
  description: "Kết nối tạo giải pháp",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
};

// Xuất khẩu layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${raleway.variable}`}>
        {children}
      </body>
    </html>
  );
}
