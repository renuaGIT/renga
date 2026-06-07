
import "./style.css";
import ContactUsWrapper from "@/components/ContactUs/ContactUsWrapper";

export const metadata = {
  title: "Contact Renua — Let’s Build Something Meaningful",
  description:
    "Get in touch with Renua to discuss branding, product design, motion systems and scalable digital experiences.",
  keywords: [
    "hire product design agency",
    "branding studio contact",
    "AI design agency",
    "fintech design partner",
    "startup design studio",
    "motion design agency",
  ],
  alternates: {
    canonical: "https://renua.one/contact-us",
  },
  openGraph: {
    title: "Contact Renua",
    description: "Let’s build meaningful digital experiences together.",


    url: "https://renua.one/contact-us",
    siteName: "Renua",
    type: "website",
    images: [
      {
        url: "https://renua.one/Renua_Preview.png",
        width: 1200,
        height: 630,
        alt: "Contact Renua — Digital Production Agency",
      },
    ],
  },
};

const Page = () => {
  return <ContactUsWrapper />;
};

export default Page;
