import { JobListing, RequestOptions } from "@/lib/types";
import { GRAPHQL_CDN_ENDPOINT } from "@/lib/config";
import { GET_JOB_LISTINGS } from "../query/job-lisiting";

export async function getJobLisitings(
  options?: RequestOptions
): Promise<JobListing[]> {
  try {
    const response = await fetch(GRAPHQL_CDN_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: GET_JOB_LISTINGS,
        // variables: {
        //   locales: [options.locale],
        // },
      }),
    });
    const { data } = await response.json();

    if (!data.jobListings) return [];

    return data.jobListings;
  } catch (e: any) {
    console.log("Service Error: getBlogPosts - ", e.message);
    return [];
  }
}
