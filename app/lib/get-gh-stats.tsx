// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { octokit } from "./octokit";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { unstable_cache } from "next/cache";


export const getGHStats = unstable_cache(
  async () => {
    const gql = String.raw;
    const { user } = await octokit.graphql<{
      user: {
        repositoriesContributedTo: { totalCount: number };
        pullRequests: { totalCount: number };
        openIssues: { totalCount: number };
        closedIssues: { totalCount: number };
        followers: { totalCount: number };
        repositories: {
          totalCount: number;
          nodes: {
            stargazers: { totalCount: number };
          }[];
          pageInfo: {
            hasNextPage: boolean;
            endCursor: string | null;
          };
        };
      };
    }>(
      gql`
        query ($login: String!) {
          user(login: $login) {
            pullRequests(first: 1) {
              totalCount
            }
            openIssues: issues(states: OPEN) {
              totalCount
            }
            closedIssues: issues(states: CLOSED) {
              totalCount
            }
            followers {
              totalCount
            }
            repositories(ownerAffiliations: OWNER, first: 100) {
              totalCount
              nodes {
                stargazers {
                  totalCount
                }
              }
              pageInfo {
                hasNextPage
                endCursor
              }
            }
          }
        }
      `,
      { login: "MurunwaMaphiri1" },
    );
    return {
      issues: user.closedIssues.totalCount + user.openIssues.totalCount,
      prs: user.pullRequests.totalCount,
      followers: user.followers.totalCount,
      stars: user.repositories.nodes.reduce(
        (totalStars, repo) => totalStars + repo.stargazers.totalCount,
        0,
      ),
    };
  },
  [],
  { revalidate: 3600 }, // revalidates 1hr
);
