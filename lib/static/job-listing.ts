import { ExperienceLevel, JobLocation, JobType, LocationType } from "../types";

export const experienceLevelMap: Readonly<Record<ExperienceLevel, string>> = {
  entryLevel: "Entry Level",
  midLevel: "Mid Level",
  seniorLevel: "Senior Level",
  leader: "Leader",
};

export const jobTypeMap: Readonly<Record<JobType, string>> = {
  fullTime: "Full Time",
  partTime: "Part Time",
  contract: "Contract",
};

export const locationTypeMap: Readonly<Record<LocationType, string>> = {
  remote: "Remote",
  onSite: "On Site",
  hybrid: "Hybrid",
};

export const jobLocationMap: Readonly<Record<JobLocation, string>> = {
  dubaiUae: "Dubai UAE",
  abuDhabiUae: "Abu Dhabi UAE",
  readingUk: "Reading UK",
  amsterdamNetherlands: "Amsterdam Netherlands",
  cairoEgypt: "Cairo Egypt",
};
