import WorksTabs from '@/components/Works/WorksTabs'
import './works.css'
import Works from '@/components/Works/Works'
import { allWorks } from '@/lib/works'

export const metadata = {
  title: "Selected Work — Product Design, Branding & Motion",

  description:
    "Selected product design, branding, fintech, AI and motion design projects created for startups and global technology companies.",

  keywords: [
    "product design portfolio",
    "branding portfolio",
    "AI product design",
    "fintech product design",
    "motion design portfolio",
    "digital agency portfolio",
  ],

  openGraph: {
    title: "Selected Work — Renua",
    description:
      "Product design, branding and motion projects for modern digital companies.",

    url: "https://renua.one/work",
    siteName: "Renua",
    type: "website",
    images: [
      {
        url: "https://renua.one/Renua_Preview.png",
        width: 1200,
        height: 630,
        alt: "Selected Work by Renua — Product Design, Branding & Motion",
      },
    ],
  },
};

const page = () => {
  return (
    <main className='works-content'>
      <h1 className='works-content__title'>
        Selected work across AI,
        fintech and digital products.
      </h1>
      <p className='works-content__descr'>A selection of recent projects across branding, product design and digital experiences for ambitious teams.</p>

      <WorksTabs />
      <Works list={allWorks} />
    </main>
  )
}

export default page
