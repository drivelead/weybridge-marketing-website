import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

import { Button } from "@/components/ui/button";
import { getJobLisitingById } from "@/lib/api/service";
import Prose from "@/components/app/prose";

export type CareerPageProps = {
  params: Promise<{ careerId: string }>;
};

export default async function Career({ params }: CareerPageProps) {
  const { careerId } = await params;

  const jobListing = await getJobLisitingById({ id: careerId });

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
              <Button asChild>
                <Link href={`/careers/${careerId}/apply`}>Apply now</Link>
              </Button>
            </div>

            <p className="my-8 font-light text-lg/6 text-cyan-200">
              {jobListing.summary}
            </p>

            <div>
              <Prose className="prose-invert">{jobListing.description}</Prose>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
