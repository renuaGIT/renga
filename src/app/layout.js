import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import PageHeader from "@/components/PageHeader";
import PageFooterBig from "@/components/PageFooterBig";
import ScrollContainer from "@/components/ScrollContainer";
import GetInTouchFixed from "@/components/GetInTouchFixed";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  metadataBase: new URL("https://renua.one"),

  title: {
    default: "Renua — AI, Fintech & Digital Product Design Studio",
    template: "%s | Renua",
  },

  description:
    "Renua is a digital product design studio creating branding, motion systems and scalable experiences for AI, fintech and technology companies.",

  keywords: [
    "product design agency",
    "branding agency",
    "motion design",
    "AI product design",
    "fintech design",
    "digital product studio",
    "startup design partner",
  ],

  openGraph: {
    title: "Renua — AI, Fintech & Digital Product Design Studio",

    description:
      "Branding, motion systems and digital product experiences for AI, fintech and technology companies.",

    url: "https://renua.one",

    siteName: "Renua",

    images: [
      {
        url: "/Renua_Preview.png",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Renua",
    description: "AI, fintech and digital product design studio.",
    images: ["/Renua_Preview.png"],
  },
  icons: {
    icon: "favicon/favicon.ico",
    shortcut: "favicon/favicon-16x16.png",
    apple: "favicon/apple-touch-icon.png",
  },
  other: {
    "p:domain_verify": "314f74d0dbf28b0b51e17b63977cdc71",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollContainer>
          <div className="app">
            <PageHeader />
            {children}
            <PageFooterBig />
            <GetInTouchFixed />
          </div>
        </ScrollContainer>
        <SpeedInsights />
      </body>
      {/* <GoogleAnalytics gaId="-bi7X69eamaJwC3qPyNYd5QnSS7KPpwiIIWrWubbxTw" /> */}
      <meta name="google-site-verification" content="-bi7X69eamaJwC3qPyNYd5QnSS7KPpwiIIWrWubbxTw" />
      {/* <Script
        id="emailjs-init"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        strategy="lazyOnload"
      />
      <Script
        id="emailjs-init-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `(function(){ emailjs.init('XVlqzmwyk5p21XGJI'); })();`
        }}
      /> */}
      <script src="https://analytics.ahrefs.com/analytics.js" data-key="ITQP3D4TW3xjYYQLj8EcNA" async></script>
    </html>
  );
}
