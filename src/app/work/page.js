import WorksTabs from '@/components/Works/WorksTabs'
import './works.css'
import Works from '@/components/Works/Works'
import { allWorks } from '@/lib/works'

export const metadata = {
  title: "Selected Work — Product Design, Branding & Motion | Renua",

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
  },
};

const page = () => {
  return (
    <main className='works-content'>
      <h1 className='works-content__title'>
        Selected work across AI, <br/>
        fintech and digital products.
      </h1>
      <p className='works-content__descr'>A selection of recent projects across branding, product design and digital experiences for ambitious teams.</p>

      <WorksTabs />
      <Works list={allWorks} />
    </main>
  )
}

export default page
