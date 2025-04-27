import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

import { getJobLisitingById, getJobLisitingPaths } from "@/lib/api/service";

import { Button } from "@/components/ui/button";
import Prose from "@/components/app/prose";
import JobApplicationForm from "@/components/pages/career/job-application-form";
import ApplyNowButton from "./apply-now-button";

export type CareerPageProps = {
  params: Promise<{ jobListingId: string }>;
};

export async function generateStaticParams() {
  const paths = await getJobLisitingPaths();
  return paths;
}

export default async function Career({ params }: CareerPageProps) {
  const { jobListingId } = await params;

  const jobListing = await getJobLisitingById({ id: jobListingId });

  if (!jobListing) notFound();

  return (
    <main>
      <section className="bg-cyan-600 py-24">
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 lg:mx-auto lg:max-w-2xl lg:pt-32">
          <div className="px-6 lg:px-8">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-cyan-50 sm:text-5xl">
              {jobListing.title}
            </h2>

            <div className="w-full flex items-center justify-center mt-4">
              <ApplyNowButton />
            </div>

            <p className="my-8 font-light text-lg/6 text-cyan-200">
              {jobListing.summary}
            </p>

            <div>
              <Prose className="prose-invert prose-p:text-cyan-200 prose-hr:border-cyan-500 prose-li:marker:text-cyan-500 prose-li:text-cyan-200 prose-strong:text-cyan-50 prose-headings:text-cyan-50">
                {jobListing.description}
              </Prose>
            </div>
          </div>

          <div className="pt-10" id="job-capplication-form-scroll">
            <div className="bg-white p-6 rounded-sm gap-6 flex flex-col">
              <h3 className="text-2xl font-semibold text-center">Apply now</h3>

              <JobApplicationForm jobListing={jobListing} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
