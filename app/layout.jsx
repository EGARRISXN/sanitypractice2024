import "./globals.css";
import {GeistSans} from "geist/font/sans";
import {GeistMono} from "geist/font/mono";

export default function Layout({children}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
}
