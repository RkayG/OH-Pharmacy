import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "OH Pharmacy - Your Trusted Local Pharmacy",
  description: "OH Pharmacy offers a wide range of private health services including travel vaccinations, weight loss programmes, and general pharmacy services. Book your appointment online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
