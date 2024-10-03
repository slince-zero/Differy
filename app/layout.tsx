import type { Metadata } from "next";
import { ThemeProvider } from './context/ThemeContext';
import "./globals.css";

export const metadata: Metadata = {
  title: "Differy",
  description: "Compare text, images, documents and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
