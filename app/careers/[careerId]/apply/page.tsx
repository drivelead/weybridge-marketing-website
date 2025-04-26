import React from "react";
import { CareerPageProps } from "../page";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import JobApplicationForm from "@/components/pages/career/job-application-form";

export default async function ApplyForCareer({ params }: CareerPageProps) {
  const { careerId } = await params;

  return (
    <main className="py-24">
      <section className="bg-cyan-600 pt-16 pb-24 sm:pt-24 sm:pb-32 lg:mx-auto lg:max-w-2xl lg:pt-32 px-6 lg:px-8">
        <div className="">
          <div className="">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-cyan-50 sm:text-5xl">
              {`Applying for Career Title`}
            </h2>
            <p className="my-8 font-light text-lg/6 text-cyan-200">
              We turn business goals into reliable, maintainable solutions —
              with clarity, precision, and zero shortcuts.
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
            <JobApplicationForm careerId={careerId} />
          </div>
        </div>
      </section>
    </main>
  );
}
