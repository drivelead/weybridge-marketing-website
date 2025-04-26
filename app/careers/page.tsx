import JobListingsArchive from "@/components/pages/careers/job-lisitings-archive";
import { getJobLisitings } from "@/lib/api/service";

export default async function Careers() {
  const jobListings = (await getJobLisitings()) || [];

  return (
    <main>
      <section className="bg-cyan-600 py-24">
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 lg:mx-auto lg:max-w-2xl lg:pt-32">
          <div className="px-6 lg:px-8">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-cyan-50 sm:text-5xl">
              {`Let's grow together`}
            </h2>
            <p className="my-8 font-light text-lg/6 text-cyan-200">
              We turn business goals into reliable, maintainable solutions —
              with clarity, precision, and zero shortcuts.
            </p>

            <div>
              <JobListingsArchive jobListingsData={jobListings} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
