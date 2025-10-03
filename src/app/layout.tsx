import type { Metadata, Viewport } from "next";
import Navbar from "./section/navbar";
import "./globals.css";
import Footer from "./section/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Vickie Voice AI Agent - Stop Missed Calls, Book More Jobs | 24/7 AI Phone Assistant",
  description: "Vickie Voice AI Agent transforms missed calls into booked appointments. Our multilingual AI phone assistant works 24/7 to capture leads, schedule appointments, and grow your business. Perfect for HVAC, healthcare, legal, and professional services.",
  keywords: ["AI phone assistant", "voice AI", "missed calls", "appointment booking", "lead capture", "business automation", "HVAC services", "healthcare", "professional services", "24/7 customer service"],
  authors: [{ name: "Omadli Group" }],
  openGraph: {
    title: "Vickie Voice AI Agent - Stop Missed Calls, Book More Jobs",
    description: "Transform missed calls into booked appointments with Vickie's 24/7 AI phone assistant. Multilingual support for all industries.",
    url: "https://vickievoiceai.com",
    siteName: "Vickie Voice AI Agent",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Vickie Voice AI Agent"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vickie Voice AI Agent - Stop Missed Calls, Book More Jobs",
    description: "Transform missed calls into booked appointments with Vickie's 24/7 AI phone assistant.",
    images: ["/logo.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://vickievoiceai.com"
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Business Software",
  classification: "AI Voice Assistant"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="preload"
          as="style"
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
