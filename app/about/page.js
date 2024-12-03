import About from "@/components/about/About";
import FAQ from "@/components/faq/FAQ";
import PageHeader from "@/components/page-header/PageHeader";
import { welcomeData } from "@/content/data/about/welcome-data";
import { whyChooseData } from "@/content/data/about/why-choose";


// export async function generateMetadata() {
//   return generatePageMetadata({
//     title:
//       "",
//     description:
//       "",
//   });
// }

export default function AboutPage() {
  // const faqSchema = getFaqSchema();

  return (
    <>
      {/* Inject JSON-LD Schemas */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      /> */}
      <PageHeader
        title="About N&K Tiling and Waterproofing"
        description="Based in Melbourne and Cranbourne North, NK Tiling and Waterproofing leads the industry in providing top-tier tiling and waterproofing services. Known for reliable workmanship and timely completion, we pride ourselves on offering tailored solutions to meet the diverse needs of our clients."
        breadcrumb="About Page"
      />
      <About welcomeData={welcomeData} whyChooseData={whyChooseData} />
      <FAQ />
    </>
  );
}
