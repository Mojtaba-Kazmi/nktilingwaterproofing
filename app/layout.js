import { defaultMetadata } from "@/metadata/metadata";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ScrollToTop from "@/components/scroll-to/ScrollTo";
import CTAButton from "@/components/cta-button/CTAButton";
import { Suspense } from "react";
import Spinner from "@/components/spinner/Spinner";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

export const metadata = defaultMetadata;

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Suspense fallback={<Spinner />}>
          <main>
            {children}
          </main>
        </Suspense>
        <Footer />
        <CTAButton />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
