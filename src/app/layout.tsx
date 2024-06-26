
import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { ComboboxDropdownMenu } from "~/components/ui/menu";
import { useEffect } from "react";
import { TRPCReactProvider } from "~/trpc/react";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Monkey Factory",
  description: "Muneebs portfolio website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="z-10 absolute top-0 right-0">
      <ComboboxDropdownMenu />
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
      <body className={`font-sans ${inter.variable} flex flex-col gap-4 `}>
        <TopNav />
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
