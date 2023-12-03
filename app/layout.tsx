import { Poppins } from "next/font/google";

import "@/app/styles/globals.css";

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
