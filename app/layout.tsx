import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Header } from "@/components/shared/header";

const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Fetta-Pizza",
  description: "The Best Pizzas in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.variable}>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
