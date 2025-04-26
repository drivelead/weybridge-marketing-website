import { JobListing, RequestOptions } from "@/lib/types";
import { GRAPHQL_CDN_ENDPOINT } from "@/lib/config";
import { GET_JOB_LISTING_BY_ID } from "../query/job-lisiting";

type Variables = {
  id: string;
};

export async function getJobLisitingById(
  variables: Variables,
  options?: RequestOptions
): Promise<JobListing | null> {
  try {
    const response = await fetch(GRAPHQL_CDN_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: GET_JOB_LISTING_BY_ID,
        variables,
      }),
    });
    const { data } = await response.json();

    if (!data.jobListing) return null;

    return data.jobListing;
  } catch (e: any) {
    console.log("Service Error: getBlogPosts - ", e.message);
    return null;
  }
}
