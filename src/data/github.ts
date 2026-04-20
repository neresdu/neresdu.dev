/**
 * GitHub API integration.
 * Fetches public repositories for the configured user at build time.
 * Uses the public API (60 req/hour limit), no auth needed.
 *
 * If the request fails (offline, rate-limited, etc), returns an empty array
 * so the build doesn't break. A warning is printed to console.
 */

import { personal } from './profile';

export type GithubRepo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  archived: boolean;
  fork: boolean;
};

/**
 * Fetches all public repos for the user, sorted by last update.
 * Filters out forks and archived repos (can be adjusted).
 */
export async function fetchRepos(): Promise<GithubRepo[]> {
  const username = personal.handle;
  const url = `https://api.github.com/users/${username}/repos?per_page=100&sort=updated&type=owner`;

  try {
    const res = await fetch(url, {
      headers: {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });

    if (!res.ok) {
      console.warn(`[github] API returned ${res.status}: ${res.statusText}`);
      return [];
    }

    const repos = (await res.json()) as GithubRepo[];

    const REQUIRED_TOPIC = 'portfolio';

    const filtered = repos.filter(
      (r) => !r.fork && !r.archived && r.topics.includes(REQUIRED_TOPIC)
    );

    // Custom sort: stars first (if any), then recent updates
    filtered.sort((a, b) => {
      if (a.stargazers_count !== b.stargazers_count) {
        return b.stargazers_count - a.stargazers_count;
      }
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });

    return filtered;
  } catch (error) {
    console.warn('[github] Fetch failed:', error);
    return [];
  }
}

/**
 * Map of GitHub language colors (same used by GitHub's language bars).
 * Keeps visual consistency with what people see on github.com.
 */
export const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  'C#': '#178600',
  'C++': '#f34b7d',
  C: '#555555',
  Java: '#b07219',
  Go: '#00ADD8',
  Rust: '#dea584',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  Dockerfile: '#384d54',
  Vue: '#41b883',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  Astro: '#ff5a03',
};
