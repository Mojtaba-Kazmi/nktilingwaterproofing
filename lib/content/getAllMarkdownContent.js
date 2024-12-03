import { fetchMarkdownFiles } from './fetchMarkdownFiles';

// Define initial directories for non-blog content
const directories = ["content/markdown/about", "content/markdown/services" ];

// Cache to store the content for efficiency
let cachedContent = null;

/**
 * Fetches all markdown content asynchronously and caches it for efficiency
 */
export const getAllMarkdownContent = async () => {
  if (cachedContent) return cachedContent; // Return cached content if available

  // Fetch content for non-blog directories in parallel
  const allContentArray = await Promise.all(
    directories.map((directory) => fetchMarkdownFiles(directory))
  );

  // Combine the content into one object
  const allContent = directories.reduce((acc, directory, index) => {
    acc[directory] = allContentArray[index]; // Store content for non-blog directories
    return acc;
  }, {});

  cachedContent = allContent; // Cache the content

  return allContent;
};