import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/main.scss";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "ContactHub",
  description: "Pequeno cadastro de clients com contatos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
