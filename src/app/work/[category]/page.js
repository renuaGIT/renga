import WorksTabs from "@/components/Works/WorksTabs";
import Works from "@/components/Works/Works";
import { getWorksByCategory, worksSeoConfig } from "@/lib/works"; // Импортируем функцию фильтрации
import { notFound } from "next/navigation";
import '../works.css';

export async function generateMetadata({ params }) {
  const { category } = await params;
  const seoData = worksSeoConfig[category];

  if (!seoData) return {};

  const canonicalUrl = `https://renua.one/work/${category}`;

  return {
    title: seoData.metaTitle,
    description: seoData.metaDescr,
    keywords: seoData.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: seoData.metaTitle,
      description: seoData.metaDescr,
      url: canonicalUrl,
      siteName: "Renua",
      type: "website",
      images: [
        {
          url: "https://renua.one/Renua_Preview.png",
          width: 1200,
          height: 630,
          alt: `${seoData.metaTitle} — Renua`,
        },
      ],
    },
  };
}

const CategoryPage = async ({ params }) => {
  const { category } = await params;
  const seoData = worksSeoConfig[category];

  if (!seoData) {
    notFound();
  }

  const filteredWorks = getWorksByCategory(category);

  return (
    <main className="works-content">
      <h1 className="works-content__title">{seoData.h1}</h1>
      <p className="works-content__descr">{seoData.descr}</p>

      <WorksTabs />
      <Works list={filteredWorks} />
    </main>
  );
};

export default CategoryPage;
