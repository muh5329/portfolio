import "~/styles/globals.css";
import Image from 'next/image'
import { Inter } from "next/font/google";

import Link from "next/link";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Monkey Factory",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="flex items-center justify-between w-full p-4 text-xl font-semibold border-b">
      <div> <Link href="/">Home</Link></div>
      <div> <Link href="/aboutme">About Me</Link></div>
      <div className="max-w-8 max-h-8">
        <a href="https://github.com/muh5329">
          <Image
            src="/icons/github-mark.png"
            width={500}
            height={500}
            alt="github Logo"
          />
        </a>
      </div>

      <div className="max-w-8 max-h-8">
        <a href="www.linkedin.com/in/muneeb-haq-87b96098">
          <Image
            src="/icons/In-Blue.png"
            width={500}
            height={500}
            alt="LinkedIn Logo"
          />
        </a>
      </div>
    </nav >
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
