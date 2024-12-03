import AllServices from "@/components/services/AllServices";

// export async function generateMetadata() {
//   return generatePageMetadata({
//     title: "Our Services",
//     description:
//       "Explore our professional uniform solutions designed to meet your business needs with style and quality.",
//   });
// }

async function getPaginatedServices(page = 1) {
  try {
    // const res = await fetch(
    //   `${process.env.NEXT_PUBLIC_API_URL}/api/services/`,
    //   {
    //     next: { revalidate: 2592000 }, // Revalidate every 30 days (2592000 seconds)
    //   }
    // );
    const res = await fetch(
      `${process.env.NEXT_API_URL}/api/services/`,
      {
        cache: "no-store", // Revalidate every 30 days (2592000 seconds)
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch services");
    }

    const allServices = await res.json();
    const SERVICES_PER_PAGE = 9;
    const totalServices = allServices.length;
    const pageCount = Math.ceil(totalServices / SERVICES_PER_PAGE);

    const sortedServices = allServices.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    const paginatedServices = sortedServices.slice(
      (page - 1) * SERVICES_PER_PAGE,
      page * SERVICES_PER_PAGE
    );

    return { paginatedServices, pageCount };
  } catch (error) {
    console.error(error);
    return { paginatedServices: [], pageCount: 0 };
  }
}

export default async function ServicesPage({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const { paginatedServices, pageCount } = await getPaginatedServices(page);

  // const servicesSchema = getAllServicesSchema();

  return (
    <>
      {/* Inject JSON-LD Schemas */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      /> */}
      <AllServices
        paginatedServices={paginatedServices}
        page={page}
        pageCount={pageCount}
      />
    </>
  );
}
