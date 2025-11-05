// Import the font loaders from 'next/font/google'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load the Geist Sans font
const geistSans = Geist({
  // Set a CSS variable name to easily use this font in CSS files
  variable: "--font-geist-sans",
  // Specify which character subsets to load (e.g., 'latin' for English)
  subsets: ["latin"],
});

// Load the Geist Mono font (for code or monospaced text)
const geistMono = Geist_Mono({
  // Set a different CSS variable name for the mono font
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define the metadata for the entire application (e.g., for SEO and browser tabs)
export const metadata = {
  title: "Open Education Hub", // The title that appears in the browser tab
  description: "Open Learning source", // The description for search engines
  icons: {
    icon: "/icons/OEH_logo.ico", // The path to the favicon
  },
};

// This is the main RootLayout component that wraps every page
export default function RootLayout({ children }) {
  // 'children' is a prop that represents the content of the current page
  return (
    // The root HTML tag, setting the language to English
    <html lang="en">
      {/* The body tag.
        - We apply the CSS variable classes from the loaded fonts.
        - 'antialiased' is a Tailwind CSS class that smooths out the font.
      */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* This is where the actual page content (passed as 'children') will be rendered */}
        {children}
      </body>
    </html>
  );
}