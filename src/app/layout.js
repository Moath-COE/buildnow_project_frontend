import "../styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Subscription Manager",
  description: "Manage All of your subscriptions in one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        {children}
      </body>
    </html>
  );
}
