import Works from "@/components/Works/Works";
import WorksTabs from "@/components/Works/WorksTabs";
import { allWorks, getWorksByCategory } from "@/lib/works";
import React from "react";

const categoryMap = {
    "brand-identity": "Brand Identity",
    "product-design": "Product Design",
    "campaign-design": "Campaign Design",
    "motion-design": "Motion Design",
    "3D-motion": "3D Motion",
    "web-design": "Web Design",
    "illustration": "Illustration",
  };

const page = async ({params}) => {

  const resolvedParams = await params;

  const {category} = resolvedParams;

  const worksList = getWorksByCategory(categoryMap[category])

  return (
    <main className="works-content">
      <b className="works-content__title">Selected work</b>
      <p className="works-content__descr">
        A selection of recent projects across branding, product design and
        digital experiences for ambitious teams.
      </p>

      <WorksTabs />
      <Works list={worksList} />
    </main>
  );
};

export default page;
