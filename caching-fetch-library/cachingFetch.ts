import { useEffect, useState } from 'react';
import axios from 'axios';
import { Data } from '../application/validation';

// You may edit this file, add new files to support this file,
// and/or add new dependencies to the project as you see fit.
// However, you must not change the surface API presented from this file,
// and you should not need to change any other files in the project to complete the challenge

const cache: Map<string, Data> = new Map();

type UseCachingFetch = (url: string) => {
  isLoading: boolean;
  data: Data | null;
  error: Error | null;
};

/**
 * 1. Implement a caching fetch hook. The hook should return an object with the following properties:
 * - isLoading: a boolean that is true when the fetch is in progress and false otherwise
 * - data: the data returned from the fetch, or null if the fetch has not completed
 * - error: an error object if the fetch fails, or null if the fetch is successful
 *
 * This hook is called three times on the client:
 *  - 1 in App.tsx
 *  - 2 in Person.tsx
 *  - 3 in Name.tsx
 *
 * Acceptance Criteria:
 * 1. The application at /appWithoutSSRData should properly render, with JavaScript enabled, you should see a list of people.
 * 2. You should only see 1 network request in the browser's network tab when visiting the /appWithoutSSRData route.
 * 3. You have not changed any code outside of this file to achieve this.
 * 4. This file passes a type-check.
 *
 */

export const useCachingFetch: UseCachingFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(() => !cache.has(url));
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (cache.has(url)) {
      setData(cache.get(url) || null);
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        const responseData = response.data;

        setData(responseData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    isLoading,
    data,
    error,
  };
};

/**
 * 2. Implement a preloading caching fetch function. The function should fetch the data.
 *
 * This function will be called once on the server before any rendering occurs.
 *
 * Any subsequent call to useCachingFetch should result in the returned data being available immediately.
 * Meaning that the page should be completely serverside rendered on /appWithSSRData
 *
 * Acceptance Criteria:
 * 1. The application at /appWithSSRData should properly render, with JavaScript disabled, you should see a list of people.
 * 2. You have not changed any code outside of this file to achieve this.
 * 3. This file passes a type-check.
 *
 */

export const preloadCachingFetch = async (url: string): Promise<void> => {
  try {
    const response = await axios.get(url);
    cache.set(url, response.data);
  } catch (error) {
    throw new Error('An error has occurred');
  }
};

/**
 * 3.1 Implement a serializeCache function that serializes the cache to a string.
 * 3.2 Implement an initializeCache function that initializes the cache from a serialized cache string.
 *
 * Together, these two functions will help the framework transfer your cache to the browser.
 *
 * The framework will call `serializeCache` on the server to serialize the cache to a string and inject it into the dom.
 * The framework will then call `initializeCache` on the browser with the serialized cache string to initialize the cache.
 *
 * Acceptance Criteria:
 * 1. The application at /appWithSSRData should properly render, with JavaScript enabled, you should see a list of people.
 * 2. You should not see any network calls to the people API when visiting the /appWithSSRData route.
 * 3. You have not changed any code outside of this file to achieve this.
 * 4. This file passes a type-check.
 *
 */
export const serializeCache = (): string => {
  const cacheObject: Record<string, Data> = {};
  cache.forEach((value, key) => {
    cacheObject[key] = value;
  });
  return JSON.stringify(cacheObject);
};

export const initializeCache = (serializedCache: string): void => {
  try {
    const cacheData = JSON.parse(serializedCache) as Record<string, Data>;
    Object.entries(cacheData).forEach(([key, value]) => {
      cache.set(key, value);
    });
  } catch (error) {
    console.error('Failed to initialize cache:', error);
    cache.clear();
  }
};

export const wipeCache = (): void => {
  cache.clear();
};
