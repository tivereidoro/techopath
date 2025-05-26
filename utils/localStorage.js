import { MAX_SEARCHES, STORAGE_KEY } from "@/utils/const";

/**
 * loadSearches - Load previous searches from localStorage
 * @returns {Array} - Array of previous searches from localStorage
 */
export const loadSearches = () => {
  if (typeof window === "undefined") return []; // Guard against server-side rendering
  const storedSearches = localStorage.getItem(STORAGE_KEY);
  return storedSearches ? JSON.parse(storedSearches) : [];
};

/**
 * saveSearch - Save a new search to localStorage
 * @param {Object} searchData - The search data to save
 */
export const saveSearch = (searchData) => {
  if (typeof window === "undefined") return;
  let searches = loadSearches();
  // Add new search to the beginning
  searches.unshift(searchData);
  // Keep only the last MAX_SEARCHES
  searches = searches.slice(0, MAX_SEARCHES);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(searches));
};
