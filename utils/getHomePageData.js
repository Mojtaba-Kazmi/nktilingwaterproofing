import { getAllMarkdownContent } from "@/lib/content/getAllMarkdownContent";
import { homeAboutFetched } from "@/content/data/about/homeAboutFetched";


export async function getHomePageData() {
  const allMarkdownContent = await getAllMarkdownContent();

  // Get "home-about" file content
  const homeAboutFile =
    allMarkdownContent["content/markdown/about"]?.find(
      (file) => file.filename === "home-about"
    );
  const homeAboutDescription = homeAboutFile?.content || "";

  // Get latest services, blog posts, and privacy policy content
  const latestServices = allMarkdownContent["content/markdown/services"] || [];

  // Construct and return data
  return {
    homeAboutData: {
      ...homeAboutFetched,
      description: homeAboutDescription, // Override description dynamically
    },
    latestServices,
  };
}