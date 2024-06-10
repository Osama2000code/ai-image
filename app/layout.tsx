import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight:['400','500','600','700'],
  variable:'--font-ibm-plex'
  });

export const metadata: Metadata = {
  title: "AI Web-App-For-Images",
  description: "AI Toos To Make Your Image Butter To Us ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      variables:{colorPrimary:'#624cf5'}
    }}>
    <html lang="en">
        <body className={cn("font-IBMPlex antialiased",IBMPlex.variable)}>
          <main>
            {children}
          </main>
        </body>
      </html>
      </ClerkProvider>
    
  );
}
