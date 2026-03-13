import type { StatusWork, RepoOrigin } from "@types/index";

export interface Work {
  title: string;
  status: StatusWork;
  technologies: string[];
  description: string;
  repoOrigin: RepoOrigin;
  repo: string;
  repoIsPrivate: boolean;
  url: string;
  urlIsAvailable: boolean;
  image: string;
}
