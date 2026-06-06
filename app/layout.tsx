import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Git Changelog Feature Grouper — Auto-group commits into user-facing features",
  description: "Analyzes git commits and automatically groups them into meaningful feature releases for changelogs. Built for product managers and developer relations teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a3a6080c-b0ad-411b-8440-a72f9dae7aa6"></script>
      </head>
      <body style={{ backgroundColor: "#0d1117", color: "#c9d1d9", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
