import { Inter } from "next/font/google";
import "~/assets/css/bootstrap.min.css";
import "~/assets/css/app.css";
import "~/assets/css/main.css";
import "~/assets/css/react-adjustment.css";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Weamis Tech Solutions",
  description: "Kết nối tạo giải pháp",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/favicon.ico?v=4"],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} var(--font-latika)`}>{children}</body>
    </html>
  );
}