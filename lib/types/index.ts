export type UserSessionProps = {
  device?: string;
  browser?: string;
  userAgent?: string;
  timezone?: string;
  locale?: string;
  currency?: string;
  theme?: string;
  origin?: string;
};

type JobApplicationStatus = "Applied" | "Shortlisted" | "Selected" | "Rejected";

export type ExperienceLevel =
  | "entryLevel"
  | "midLevel"
  | "seniorLevel"
  | "leader";
export type LocationType = "remote" | "onSite" | "hybrid";
export type JobType = "fullTime" | "partTime" | "contract";
export type JobLocation =
  | "dubaiUae"
  | "abuDhabiUae"
  | "readingUk"
  | "amsterdamNetherlands"
  | "cairoEgypt";

export type JobListing = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  isOpen: boolean;
  experienceLevel: ExperienceLevel;
  jobLocation: JobLocation;
  jobType: JobType;
  locationType: LocationType;
};

export type JobApplication = {
  _id: string;
  fullName: string;
  whatsappNumber: string;
  email: string;
  currentLocation: string;
  applicationSource: string;
  applicationStatus: JobApplicationStatus;
  cv: {
    url: string;
  };
};

export type RequestOptions = {
  safe?: boolean;
  model?: string;
  // debug
  caller?: string;
};
