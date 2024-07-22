import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import LeftLayoutWrapper from "@/components/left-layout-wrapper";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "Interview Playbook",
  description: "Interview Playbook for Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="font-mono">
        <Nav />
        <section className="lg:flex ">
          <Suspense fallback={<div>Loading...</div>}>
              <LeftLayoutWrapper/>
          </Suspense>
          <div className=" lg:w-[85vw] h-[92vh] overflow-y-scroll">
            {children}
          </div>
        </section>
      </body>
    </html>
  );
}
