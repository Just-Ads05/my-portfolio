/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let repo = '';
if (isGithubActions) {
  // Extracts repository name (e.g. "Just-Ads05/my-portfolio" -> "my-portfolio")
  repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '') || '';
}

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: repo ? `/${repo}` : '',
  assetPrefix: repo ? `/${repo}/` : '',
};

export default nextConfig;
