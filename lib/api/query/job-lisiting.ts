import { gql } from "graphql-request";

const jobListingFragment = gql`
  fragment JobListing on JobListing {
    id
    title
    slug
    summary
    description
    isOpen
    experienceLevel
    jobLocation
    jobType
    locationType
  }
`;

export const GET_JOB_LISTINGS = gql`
  query GET_JOB_LISTINGS {
    jobListings {
      ...JobListing
    }
  }
  ${jobListingFragment}
`;

export const GET_JOB_LISTING_BY_SLUG = gql`
  query GET_JOB_LISTING_BY_ID($slug: String!) {
    jobListing(where: { slug: $slug }) {
      ...JobListing
    }
  }
  ${jobListingFragment}
`;

export const GET_JOB_LISTING_PATHS = gql`
  query GET_JOB_LISTING_PATHS {
    jobListings {
      slug
    }
  }
`;
