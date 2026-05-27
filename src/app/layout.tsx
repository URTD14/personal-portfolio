import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhyey Patel — Builder. Quant. ML Engineer.",
  description:
    "Technical Co-founder @ GLOQONT. Building from first principles. 3,500-param looped transformer. Autonomous trading agents. Motion design.",
  openGraph: {
    title: "Dhyey Patel",
    description: "Builder. Quant. ML Engineer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
