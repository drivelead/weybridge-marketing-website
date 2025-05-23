import Link from "next/link";
import React from "react";

import { JobListing as TJobListing } from "@/lib/types";
import {
  experienceLevelMap,
  jobLocationMap,
  jobTypeMap,
  locationTypeMap,
} from "@/lib/static/job-listing";

import { Button } from "@/components/ui/button";

type Props = { jobListing: TJobListing };

export default function JobListing({ jobListing }: Props) {
  return (
    <div>
      <h3 className="text-2xl font-semibold tracking-tight text-cyan-50">
        <Link href={`/careers/${jobListing.id}`}>{jobListing.title}</Link>
      </h3>
      <p className="mt-2 text-lg/6 text-cyan-200">{jobListing.summary}</p>

      <div className="flex flex-col mt-4 text-cyan-300">
        <span></span>
        <span>
          {experienceLevelMap[jobListing.experienceLevel]} •{" "}
          {jobLocationMap[jobListing.jobLocation]} •{" "}
          {jobTypeMap[jobListing.jobType]} •{" "}
          {locationTypeMap[jobListing.locationType]}
        </span>
        <span></span>
      </div>

      <Button asChild className="mt-4">
        <Link href={`/careers/${jobListing.id}`}>Job Details</Link>
      </Button>
    </div>
  );
}
