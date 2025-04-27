import React from "react";
import { CareerPageProps } from "../page";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJobLisitingById } from "@/lib/api/service";

import { Button } from "@/components/ui/button";
import JobApplicationForm from "@/components/pages/career/job-application-form";

export default async function ApplyForCareer({ params }: CareerPageProps) {
  const { jobListingId } = await params;

  const jobListing = await getJobLisitingById({ id: jobListingId });

  if (!jobListing) notFound();

  return (
    <main className="py-24">
      <section className="bg-cyan-600 pt-16 pb-24 sm:pt-24 sm:pb-32 lg:mx-auto lg:max-w-2xl lg:pt-32 px-6 lg:px-8">
        <div className="">
          <div className="">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-cyan-50 sm:text-5xl">
              {`Applying for ${jobListing.title}`}
            </h2>
            <p className="my-8 font-light text-lg/6 text-cyan-200">
              {jobListing.summary}
            </p>

            <div>
              <div>
                <Button asChild>
                  <Link href={`/careers`}>View All Careers</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-sm">
            <JobApplicationForm jobListing={jobListing} />
          </div>
        </div>
      </section>
    </main>
  );
}
