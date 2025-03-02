import type { Metadata } from "next";
import { Chewy } from "next/font/google";
import "./globals.css";

const chewy = Chewy({
  variable: "--font-chewy",
  weight: "400",
  subsets: ["latin"],

})

export const metadata: Metadata = {
  title: "Clay Calculator",
  description: "A clay shrinkage calculator by @simplythebex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${chewy.variable} ${chewy.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
