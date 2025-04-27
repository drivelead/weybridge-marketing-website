import { JobListing, RequestOptions } from "@/lib/types";
import { GRAPHQL_CDN_ENDPOINT } from "@/lib/config";
import { GET_JOB_LISTING_PATHS } from "../query/job-lisiting";

export async function getJobLisitingPaths(
  options?: RequestOptions
): Promise<{ jobListingId: string }[]> {
  try {
    const response = await fetch(GRAPHQL_CDN_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: GET_JOB_LISTING_PATHS,
        // variables: {
        //   locales: [options.locale],
        // },
      }),
    });
    const { data } = await response.json();

    const jobListings: JobListing[] = data.jobListings || [];

    const paths = jobListings.map((jobListing) => ({
      jobListingId: jobListing.id,
    }));

    return paths;
  } catch (e: any) {
    console.log("Service Error: getBlogPosts - ", e.message);
    return [];
  }
}
