import React from "react";

import { JobListing as TJobListing } from "@/lib/types";

import JobListing from "./job-listing";

type Props = {
  jobListingsData: TJobListing[];
};

export default function JobListingsArchive({ jobListingsData }: Props) {
  return (
    <div className="grid grid-cols-1 gap-8">
      {jobListingsData.map((jobListing) => (
        <JobListing key={jobListing.id} jobListing={jobListing} />
      ))}
    </div>
  );
}
