import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web - TurboCoolStack",
  description: "A Turborepo starter kit that simplifies the setup for developing applications across desktop, web, and mobile platforms, utilizing integrated tools like Electron, React, React Native, Expo, Next.js, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
