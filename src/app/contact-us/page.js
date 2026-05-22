
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

  openGraph: {
    title: "Contact Renua",

    description:
      "Let’s build meaningful digital experiences together.",
  },
};

const Page = () => {
  return <ContactUsWrapper />;
};

export default Page;
