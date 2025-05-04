import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Subscriptions Manager",
  description: "Manage All of your subscriptions in one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col max-h-[100lvh]`}>
        {children}
      </body>
    </html>
  );
}
